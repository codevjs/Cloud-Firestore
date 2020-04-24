class ArticleComponent extends HTMLElement {

    constructor() {
        super();
    }

    // Akan terpanggil setiap kali elemen berhasil ditambahkan ke dokumen HTML (DOM).
    // Callback ini merupakan tempat yang tepat untuk menjalankan konfigurasi awal seperti mendapatkan data,
    // atau mengatur attribute.
    connectedCallback() {
        this.render();
    }

    setArticle({title, image, description, category}) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.category = category;
        this.render();
    }

    render() {
        this.innerHTML = `
            <article>             
                    <div class="article-image">
                        <img src="${this.image}" alt="${this.title}" />
                    </div>
                    <div class="article-content">
                        <h4>${this.title}</h4>
                         <h5 style="margin-top: 0">kategori: <b style="color: #ff5483">${this.category}</b></h5>
                        <p> ${this.description}</p>
                    </div>
            </article>
        `
    }
}

customElements.define("single-article", ArticleComponent);
