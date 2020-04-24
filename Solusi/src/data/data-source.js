import firebase from "firebase/app";
import "firebase/firestore";

class DataSource {

    constructor() {

    }

    ref() {
        return firebase.firestore().collection('articles');
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
        let query = this.ref()
        this.getDocumentsInQuery(query, renderer);
    }

    getArticle(id) {
        return this.ref().doc(id).get()
    }

    getFilteredArticle(filter, renderer) {
        let query;
        if (filter !== 'Semua'){
            query = this.ref()
                .where('category', '==', filter)
                .orderBy('title', "asc");
        }else {
            query = this.ref();
        }

        this.getDocumentsInQuery(query, renderer);
    }

    /**
     * @param {object} data
     * @return {Promise<string>}
     */
    setArticle(data) {
        return this.ref().add(data)
            .then(() => {
                return Promise.resolve('Artikel berhasil ditambahkan.')
            })
            .catch(error => {
                return Promise.reject(error.message)
            })
    }

    addView(articleId){
        let document = this.ref().doc(articleId);
        firebase.firestore().runTransaction(transaction => {
           return transaction.get(document)
               .then(doc => {
                   let data = doc.data();
                   return transaction.update(document, {
                       views : data.views ? data.views + 1 : 1
                   })
               })
        });

    }

}

export default DataSource
