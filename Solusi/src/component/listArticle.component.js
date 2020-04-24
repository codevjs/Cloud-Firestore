import DataSource from "../data/data-source";

class ListArticleComponent extends HTMLElement {

    constructor() {
        super();
        this._articles = [];
    }

    // Akan terpanggil setiap kali elemen berhasil ditambahkan ke dokumen HTML (DOM).
    // Callback ini merupakan tempat yang tepat untuk menjalankan konfigurasi awal seperti mendapatkan data,
    // atau mengatur attribute.
    connectedCallback() {
        this.filters();
        this.selectOnChange();
    }

    set articles(articles) {
        this._articles = articles;
        this.render();
    }

    selectOnChange(){
        const select = document.querySelector('select');
        select.addEventListener('change', e => {
            new DataSource().getFilteredArticle(e.target.value, this);
        })
    }

    filters(){
        this.innerHTML = ` 
             <div style="width: 100%; text-align: right">
                     <select name="category" style="width: 30%">
                        <option>Semua</option>
                        <option>Berita</option>
                        <option>Teknologi</option>
                        <option>Olahraga</option>
                     </select>
                     <br/>
                     <br/>
            </div>
        `
    }

    render() {
        document.querySelector('#list-articles')?.remove();
        let element = this._articles.map(item => (`
            <article>
                <a href="/artikel?id=${item.id}">
                    <div class="article-image">
                        <img src="${item.image}" alt="${item.title}" />
                    </div>
                    <div class="article-content">
                        <h4>${item.title}</h4>
                        <h5 style="margin-top: 0">kategori: <b style="color: #ff5483">${item.category}</b></h5>
                        <p> ${item.description?.substr(0, 100) + '...' || ""}</p>
                    </div>
                </a>
            </article>
        `));
        const newSection     = document.createElement('section');
        newSection.id        = 'list-articles';
        newSection.innerHTML = element.join('<br/>');
        this.append(newSection);
    }
}

customElements.define("list-article", ListArticleComponent);
