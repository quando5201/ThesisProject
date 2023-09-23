# **A web-based for Finding similar images using Neural Network**

## **Introduction**

In today's advanced technology era, the digital library is the most suitable solution to the problem mentioned above, is a platform that helps the school librarian to keep a close eye on the resources in the library easier, is a place where students can stay at home to find information about the book or article they need without going to the library to search and waste time with it. Besides, this 
system also helps students see if the books they need can be borrowed, if so, they can borrow on the days they want and then go to the library to receive the books. These applications of the "digital library" will help the confusing interaction between librarians with too many students, which will reduce pressure for both parties and save more time.

In addition, a basic digital library with image-based searching applies Machine Learning (ML) to help students to find the book easily they need when they have the cover image. This function makes the search process more diverse and easier, besides searching for books based on fields, author's name, and book title when students can't remember these information. This is the reason why image-based searching helps the output for students to be more accurate instead of you having to search through huge data of thousands of books to find the right book. Because of the problems mentioned above, the goal of this thesis is to create a digital library website that applies image search to satisfy and solve the problems mentioned

## Methodology 

### Web application

As the information has been introduced before, the website only has similarities between the user, and the admin with the system, and each party will have the same functions, but the admin will be licensed to do more functions. The first and most important will be the user, here will be the students in the school, they can find the books by any information and date that they want to borrow and even the cover image of the books. After that, the system will give a list of books including input information which students are looking for with the information of that book such as title, author, publication year, and publisher,... and can proceed to borrow books later. However, booking will only be allowed when the user has logged into the system with the account provided by the admin (school), students will know which books can be borrowed and which can not decide to borrow a book. As for the “admin” accounts, which can be seen as librarians, they have right to access to the “Admin Dashboard” to view, create, and delete accounts, books, book slots, as well as similar functions developed for student accounts. 

Besides developing a website "Digital Library", I will also apply a Machine Learning model for the image search function to the system which will be developed mainly based on CNN's VGG16 algorithms for the feature extraction of the dataset image and the input image from the students, the formula from Nearest Neighbor to compute the images with the most similar features.

To develop both a digital library simulation website as well as apply a machine learning model in finding images of book covers that match the input, it is necessary to clearly define how to design a whole system. The system will be built as figure below:

![Tier 2 Diagram of Digital Library System](https://res.cloudinary.com/quando52/image/upload/v1695493233/Tier_2_Diagram_hvpxhv.png)

### Machine Learning Model

The transferred learning model is based on the VGG16 pre-trained model architecture trained on the [ImageNet dataset]( https://www.image-net.org/about.php) with 14 million images. However, the model has been fine-tuned to fit the image classification task of "Book" and "Comic-book" with two output classes. 

![Pipeline system for training ML model](https://res.cloudinary.com/quando52/image/upload/v1695493233/Pipeline_ML_fk06cv.png)

### Dataset

To prepare a sufficient amount of data for both training a VGG16 CNN model and applying it to a digital library website, it is important to carefully select data, including images for training the model and labels for the book covers. Kaggle is a community platform for data scientists and machine learning experts around the world that provides resources and tools to help those interested in machine learning get started with their first model training. Two datasets, [Book Recommendation Dataset](https://www.kaggle.com/datasets/arashnic/book-recommendation-dataset) and [Comic Books Classification](https://www.kaggle.com/datasets/cenkbircanoglu/comic-books-classification) will be used to some extent for both model training and the data of the digital library website.

## Training Model
After preparing the completed data files for model training, a VGG16 algorithm was chosen, and the model architecture was redesigned to be more suitable for the purpose and data files of this problem. The architecture includes layers, activation functions, loss functions, and optimization algorithms. Finally, the model structure used to train the model will be displayed

![ML model architecture](https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.15752-9/357367730_1023041391982354_5632036022773610692_n.png?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GyjI2Wcw0JQAX9TwF_A&_nc_ht=scontent.fsgn5-12.fna&oh=03_AdR-mqebrP1p9i21bAjJJxE_5o7zsTdDHOdoEvJQM4R2oA&oe=64C5053D)

The accuracy and validation loss metrics of the trained model are examined to assess its performance, as shown in the following figure. 

![The accuracy and the loss of model](https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/356987701_1263775810931515_2202132999841238765_n.png?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=uhD_TCJvlwIAX9J_2qp&_nc_ht=scontent.fsgn5-15.fna&oh=03_AdQE5OMXr63aKkDVxDmj8YVdAo0pOfTVwBibMCVMHReZXg&oe=64C52C27)

## Results

### Finding similar images page

![Finding similar images page](https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.15752-9/357411035_1300742657483123_8158075888394979946_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mCzZ84ETFpsAX9Mlgnn&_nc_ht=scontent.fsgn5-2.fna&oh=03_AdRH9CgcFnT00kHbLp_m8F7kXf2ES9CL4gOmcYQKpmbasQ&oe=64C52665)

### Digital Library homepage

![Digital Library homepage](https://res.cloudinary.com/quando52/image/upload/v1695493298/Digital_Library_Homepage_fgkzh3.png)

### List of books

![List of books](https://res.cloudinary.com/quando52/image/upload/v1695493297/Books_s_List_page_hzylxg.png)

### Book information page

![### Book information page](https://res.cloudinary.com/quando52/image/upload/v1695493297/Book_page_tq3aqf.png)

### Admin Dashboard homepage

![Admin Dashboard homepage](https://res.cloudinary.com/quando52/image/upload/v1695493297/Admin_Dashboard_Homepage_cyknjl.png)

### Book managemnet page

![Book managemnet page](https://res.cloudinary.com/quando52/image/upload/v1695493298/List_page_z1jjtp.png)

### Create a new book page

![Create new book page](https://res.cloudinary.com/quando52/image/upload/v1695493298/Create_new_account_page_jn0rlh.png)

## Conclusion

The digital library system has a function of searching for similar images developed from a neural network that has most of the basic functions that a digital library website needs such as: suggesting information through image search, searching for book information, borrowing books, viewing information on borrowed dates, managing user accounts, and the number of books. This project is an opportunity to better understand the platform for building a machine-learning model, especially in the field of Image Classification. In addition, the digital library system enhances knowledge about programming a website and how to implement a digital library system in practice.
