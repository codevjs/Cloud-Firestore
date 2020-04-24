class AppBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback(){
        this.render();
        this.active();
    }

    active(){
        let path = window.location.href;
        let el   = document.querySelector('.navbar').children;
        for (let i in el){
            if (!el[i]?.children) break;
            if (el[i]?.children[0].href === path) {
                el[i].className = 'active';
                break;
            }
        }
    }

    render(){
        this.innerHTML = `
                <nav style="overflow: auto">
                    <section class="container">
                        <div style="float: left">
                            <a href="/">
                                <img 
                                    src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
                                    alt="Renaldi Pranata"
                                />
                            </a>
                        </div>
                        <div style="float: left">
                            <ul class="navbar">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/tambah-artikel">Tambah Artikel</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </nav>
        `
    }
}

customElements.define('app-bar', AppBar);
