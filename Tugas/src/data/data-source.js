import firebase from "firebase/app";
import "firebase/firestore";

class DataSource {

    constructor() {

    }

    collection() {
        // TODO
    }

    /**
     * @param query
     * @param {$ElementType} renderer
     */
    getDocumentsInQuery(query, renderer) {
        query.onSnapshot(snapshot => {
            if (!snapshot.size) return renderer.articles = [];
            let data = [];
            snapshot.forEach(doc => {
                data.push({...doc.data(), id: doc.id})
            });
            return renderer.articles = data;
        });
    }

    /**
     * @param {$ElementType} renderer
     */
    getAllArticles(renderer) {
        // TODO mengambil semua artikel
    }

    getArticle(id) {
        // TODO mengambil artikel berdasarkan id artikel
    }

    getFilteredArticle(filter, renderer) {
        // TODO filter artikel berdasarkan kategori
    }

    /**
     * @param {object} data
     * @return {Promise<string>}
     */
    setArticle(data) {
        // TODO membuat artikel
    }

    addView(articleId){
        // TODO menambahkan transaksi
    }

}

export default DataSource
