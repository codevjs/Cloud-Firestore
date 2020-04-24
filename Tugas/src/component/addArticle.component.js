import DataSource from "../data/data-source";

class addArticleComponent extends HTMLElement {

    constructor() {
        super();
        this.isLoading = false
    }

    // Akan terpanggil setiap kali elemen berhasil ditambahkan ke dokumen HTML (DOM).
    // Callback ini merupakan tempat yang tepat untuk menjalankan konfigurasi awal seperti mendapatkan data,
    // atau mengatur attribute.
    connectedCallback() {
        this.render(); // render element
        this.onSubmit();
    }

    onSubmit() {
        const form = document.querySelector('form');
        form.addEventListener('submit', async e => {
           try {
               e.preventDefault();
               const {image, title, description, category} = e.target.children;

               this.isLoading = true;
               this.render(image.value, title.value, description.value);
               this.onSubmit();

                const message =  await new DataSource().setArticle({
                    image : image.value,
                    title : title.value,
                    description : description.value,
                    category : category.value
               });

               alert(message);
               window.location.href = '/';

           }catch (e) {
               alert(e);
               this.isLoading = false;
               this.render();
               this.onSubmit();
           }
        })
    }

    render(image, title, description ) {
        this.innerHTML = `
            <div>
                <form>
                    <label>Link Gambar</label>
                    <input 
                        type="text" 
                        name="image" 
                        placeholder="example : https://xnxx.com/gambar.png" 
                        value="${image || ''}"
                    />
                    <br/>
                    <br/> 
                    <label>Judul Artikel</label>
                    <input 
                        type="text" 
                        name="title" 
                        value="${title || ''}"
                     />
                     <br/>
                     <br/> 
                      <label>Kategori</label>
                      <select name="category">
                            <option>Berita</option>
                            <option>Teknologi</option>
                            <option>Olahraga</option>
                       </select>
                      <br/>
                      <br/> 
                    <label>Deskripsi</label>
                    <textarea name="description" >${description || ''}</textarea>
                    <br/>
                    <br/>
                    <Button type="submit" >
                       ${this.isLoading ? 'Loading...' : 'Tambahkan'}
                    </Button>
                </form>
            </div>
        `;
    }
}

customElements.define("add-article", addArticleComponent);
