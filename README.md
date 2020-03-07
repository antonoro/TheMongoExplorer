# The Mongo Explorer

Midterm exam of Web Development class ISIS3710 at Universidad de los Andes.

OPTION 1: Application that lists all databases in a Mongo server, and allows to browse their collections and contents.
The app will be deployed on herokuapp.com and will allow add registers to existing collections. Due Saturday March 7th 2020, 8AM.

## 1: Objectives and technologies used

This project allows to browse all database in our MongoDB atlas cluster. Then, by selecting a collection from the chosen database, the application displays all fields (documents) from the collection. As well, it allows the user to add documents to a selected collection, from a selected database. 

### Technologies used

This project is developed mainly using Javascript, HTML and CSS. Node.js is used to set up the web server, MongoDB (atlas server) manages the data and Express.js was used to set up the basis of the project. Bootstrap provides fonts and templates for front-end cosmetics and Heroku was used to deploy the app on the web.

## 2: Walk-through / How to deploy

### 2.1: Prerequisites

Deployed web version:

My app is deployed at this <a href="https://frozen-anchorage-40281.herokuapp.com/">LINK</a>.


Web dev version:

After cloning the project repository to a local folder, you'll need to install these few dependencies and softwares:

- Node.js : You'll absolutely need this Javascript runtime, since everything server-side is based upon it. The Node Package Manager (npm) is very useful to include more Node modules. However, needed modules are already included in the project repo. You can find it at this link : https://nodejs.org/en/download/

- MongoDB : You won't need to manage your own database to run this project as it uses a cloud-based MongoDB Atlas server. Using npm, adding mongodb to your project is fairly easy, if you want to develop your own local DB. I suggest downloading MongoDB Compass, which provides an intuitive UI to manage database creations and content. 

You will of course need a web browser, such as Firefox, to load the front-end part of our project. Finally, to use and modify the project for personal use, you'll need a text/code editor, such as Visual Studio Code or SublimeText.  

### 2.2: How to install

Install all dependencies provided in the package.json file: 

```
npm install

```

### 2.3: How to launch

I used nodemon to relaunch our project after every change, but using the standard npm start command is fine as well.

```
nodemon index
```

Navigate to localhost:3000 on your web browser and enjoy my app!

## 3: Author

This project is made by Antoine Noreau, for the Web Developement Class at Universidad de Los Andes, Colombia. 

Antoine Noreau // https://github.com/antonoro

## 4: Screenshot of main page

<img src="Screenshot.png" alt="Screenshot of main page">

## 5: Licence

This project is licensed under the terms of the MIT <a href="./LICENSE.md">License</a>.
