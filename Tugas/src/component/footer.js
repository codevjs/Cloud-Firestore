// import '../style/footer.css';

class Footer extends HTMLElement {

    constructor() {
        super();

    }

    connectedCallback(){

        this.render();
    }

    render(){
        this.innerHTML = `
                <footer>
                     <div class="footer-text">
                        <div class="container">
                            <p>copyright © Renaldi Pranata | Get Know Cloud Firestore</p>
                        </div>
                    </div>
                </footer>
        `
    }
}

customElements.define('footer-content', Footer);
