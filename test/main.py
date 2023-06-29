import cv2
import os
import pickle
import numpy as np
import json
import tensorflow as tf
from keras.preprocessing.image import image_utils
from keras.applications.vgg16 import preprocess_input
from keras.models import Model
from keras.optimizers import adam
from PIL import Image
import streamlit 

IMAGE_WIDTH = 224
IMAGE_HEIGHT = 224
IMAGE_SIZE = (IMAGE_WIDTH, IMAGE_HEIGHT)
IMAGE_CHANNELS = 3

#Run by streamlit run main.py
record =[]
def get_embedding(model, imagename):
    img = image_utils.load_img(imagename, target_size=(IMAGE_WIDTH, IMAGE_HEIGHT))
    x   = image_utils.img_to_array(img)
    x   = np.expand_dims(x, axis=0)
    x   = preprocess_input(x)
    return model.predict(x).reshape(-1)

def save_file(uploaded_file):
    try:
        with open(uploaded_file.name, 'wb') as f:
            f.write(uploaded_file.getbuffer())
            return 1
    except:
        return 0

def readfile(PATH):
    with open(PATH, 'r') as f:
        temp = json.loads(f.read())
        isbn = temp['ISBN']
        type = temp['Type']
        title = temp['Title']
        author = temp['Author']
        field = temp['Field']
        year = temp['Year']
        publisher = temp['Publisher']
        record = {
            'Isbn': isbn,
            'Type': type,
            'Title': title,
            'Author': author,
            'Field': field,
            'Year': year,
            'Publisher': publisher
        }
    return record

restored_model = tf.keras.models.load_model('model.h5')
secondmodel = Model(inputs = restored_model.input,
                                 outputs= restored_model.layers[2].output)
#print(secondmodel.summary())
restored_model.compile(loss = 'categorical_crossentropy', optimizer = adam.Adam(learning_rate = 2.5e-4) , metrics = ['accuracy'])
secondmodel.compile(loss = 'categorical_crossentropy', optimizer = adam.Adam(learning_rate = 2.5e-4) , metrics = ['accuracy'])
streamlit.write('After finding similar cover image of book, you can find that book by field and year of publish at http://localhost:3000')
uploaded_file = streamlit.file_uploader("Choose your image") #Upload image to system
if uploaded_file is not None:
    if save_file(uploaded_file):
        # display image
        uploadimage = cv2.imread(uploaded_file.name) 
        streamlit.image(uploaded_file)
        #imagearray = get_embedding(secondmodel, uploaded_file.name)
        filename = uploaded_file.name[0:6]
        loaded_model = pickle.load(open('crawldata/book/knn.pkl', 'rb'))

        imagearray = get_embedding(secondmodel, uploaded_file) #Extract image to vector array

        thislist = sorted(filter(lambda x: os.path.isfile(os.path.join('crawldata/book/', x)), os.listdir('crawldata/book/')))

        distance, indices = loaded_model.kneighbors([imagearray]) #Run knn for query vector array --> get closet image

        print(indices)
        print(distance)

        for j in range(4):
            print('crawldata/book/' + str(thislist[indices[0][j]*2]))
        col1, col2, col3, col4 = streamlit.columns(4)
        with col1:
            streamlit.image('crawldata/book/' + thislist[indices[0][0]*2])
            PATH = 'crawldata/book/' + thislist[indices[0][0]*2 + 1]
            record = readfile(PATH)
            streamlit.write(record['Title'])
            streamlit.write(record['Author'])
            streamlit.write(record['Field'])
            streamlit.write(record['Year'])
        with col2:
            streamlit.image('crawldata/book/' + thislist[indices[0][1]*2])
            PATH = 'crawldata/book/' + thislist[indices[0][1]*2 + 1]
            record = readfile(PATH)
            streamlit.write(record['Title'])
            streamlit.write(record['Author'])
            streamlit.write(record['Field'])
            streamlit.write(record['Year'])
        with col3:
            streamlit.image('crawldata/book/' + thislist[indices[0][2]*2])
            PATH = 'crawldata/book/' + thislist[indices[0][2]*2 + 1]
            record = readfile(PATH)
            streamlit.write(record['Title'])
            streamlit.write(record['Author'])
            streamlit.write(record['Field'])
            streamlit.write(record['Year'])
        with col4:
            streamlit.image('crawldata/book/' + thislist[indices[0][3]*2])
            PATH = 'crawldata/book/' + thislist[indices[0][3]*2 + 1]
            record = readfile(PATH)
            streamlit.write(record['Title'])
            streamlit.write(record['Author'])
            streamlit.write(record['Field'])
            streamlit.write(record['Year'])

