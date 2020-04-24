import DataSource from "../data/data-source";
import '../component/article.component';

const articleView = async (id) => {
    let dataSource   = new DataSource();
    let element      = document.createElement('single-article');
    let doc          = await dataSource.getArticle(id.replace('id=', ''));
    await dataSource.addView(id.replace('id=', ''));
    element.setArticle({...doc.data()});
    document.querySelector('#root').appendChild(element);
};

export default articleView;


