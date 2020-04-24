import '../component/listArticle.component.js';
import DataSource from "../data/data-source.js";

const homeView = async () => {
    let element = document.createElement('list-article');
    new DataSource().getAllArticles(element);
    document.querySelector('#root').appendChild(element);
};

export default homeView;


