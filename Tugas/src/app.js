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
// firebase config
const config = {

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


