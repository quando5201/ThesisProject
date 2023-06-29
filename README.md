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

![Tier 2 Diagram of Digital Library System](https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/357368730_1287376012143130_4100978643304128255_n.png?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MCR7e6Pf6IIAX-XSFOC&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdSQZzF80ymBwfd6p_HHRHzzLkbY0s72KHuAecmvEGhEYQ&oe=64C51E4A)

### Machine Learning Model

The transferred learning model is based on the VGG16 pre-trained model architecture trained on the [ImageNet dataset]( https://www.image-net.org/about.php) with 14 million images. However, the model has been fine-tuned to fit the image classification task of "Book" and "Comic-book" with two output classes. 

![Pipeline system for training ML model](https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.15752-9/357140136_728447995957913_8192066841618963585_n.png?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wzyKS7bVp6MAX8VJhZc&_nc_ht=scontent.fsgn5-12.fna&oh=03_AdTE8U_Mt_EpnPvWV0nHXtxhctyfs8IS3rC7eeatp-GjSA&oe=64C521C4)

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

![Digital Library homepage](https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/357567734_960672578491973_2756017332541395369_n.png?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GS9UiLXv89sAX-ukE8x&_nc_ht=scontent.fsgn5-14.fna&oh=03_AdR9h1ZVa06T18gwtvOcjiq2ZuJRdQf5E-2Z704LmOk9Zw&oe=64C51B47)

### List of books

![List of books](https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/357334387_678563584102931_7891635222276835215_n.png?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=hl5CoRgS2-IAX-oTcLU&_nc_ht=scontent.fsgn5-15.fna&oh=03_AdS5ByhueS1cIK5_3mJfl86kVVDIVbqT6MqrZAOAcR2Ydg&oe=64C532F8)

### Book information page

![### Book information page](https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/357415749_811723900609489_3085173752442810890_n.png?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QjgjcdxtBR8AX_WJWpQ&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdTWT4sKhGrRcgsCAYWO7S6Di-fjwTZ3DpSmEgspWMotig&oe=64C52DCD)

### Admin Dashboard homepage

![Admin Dashboard homepage](https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/357317597_1029312788430732_1904560745511981404_n.png?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MahnGWnAWAIAX9e5NfR&_nc_ht=scontent.fsgn5-15.fna&oh=03_AdTiBROWxh_-BWjLEBMEHNITh-M1Zp_SLxolDrkjyTZCig&oe=64C53BEA)

### Book managemnet page

![Book managemnet page](https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.15752-9/357390482_6343970269021151_7450217158397975613_n.png?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RMK9CLvojdAAX9VyzZp&_nc_ht=scontent.fsgn5-13.fna&oh=03_AdRO13iULJXQn8BJ9_tpGDNcdZ5bCIApAYeSrv4U5Svm6A&oe=64C53C2D)

### Create a new book page

![Create new book page](https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.15752-9/357524367_200601892595359_4015732740542187546_n.png?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=_CBr90IfSpsAX-rcL8j&_nc_ht=scontent.fsgn5-12.fna&oh=03_AdRMS_oK3ecCoKxn_RAn-jiFV7Gv4qoKR4U7d4akqT1-dw&oe=64C5249B)

## Conclusion

The digital library system has a function of searching for similar images developed from a neural network that has most of the basic functions that a digital library website needs such as: suggesting information through image search, searching for book information, borrowing books, viewing information on borrowed dates, managing user accounts, and the number of books. This project is an opportunity to better understand the platform for building a machine-learning model, especially in the field of Image Classification. In addition, the digital library system enhances knowledge about programming a website and how to implement a digital library system in practice.
