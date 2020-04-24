import firebase from "firebase/app";

// css
import './style/main.css';

// js
import "regenerator-runtime";
import './component/app-bar.js';
import './component/profile.js';
import './component/footer.js';

// view
import homeView from './view/home.view.js';
import addArticleView from "./view/addArticle.view.js";
import articleView from "./view/article.view.js";

//router
import Navigo from "navigo";


// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyCIITC8HLqXcs8HcsbyZJVYKqtYX3g9OqE",
    authDomain: "friendlyeats-53606.firebaseapp.com",
    databaseURL: "https://friendlyeats-53606.firebaseio.com",
    projectId: "friendlyeats-53606",
    storageBucket: "friendlyeats-53606.appspot.com",
    messagingSenderId: "94283797300",
    appId: "1:94283797300:web:a5991fa789b6542a29cb61"
};

// Initialize Firebase
firebase.initializeApp(config);

const router = new Navigo();

router
    .on({
        '/': () => homeView(),
        '/artikel' : (param, query) => articleView(query),
        '/tambah-artikel': () => addArticleView(),
    })
    .resolve();


