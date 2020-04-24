// import '../style/profile.css'

class Profile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.render()
    }

    render() {

        this.innerHTML = `
            <aside>
                <div style="text-align: center">
                    <img class="avatar"
                         src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
                         alt="renaldi pranta image"
                    />
                    <p>
                        <b style="color: #ff5483">Cloud Firestore</b>
                    </p>
                </div>
                <div>
                    <p style="font-size: 13px;">
                        Cloud Firestore is a fast, fully managed, serverless, cloud-native NoSQL document database that simplifies storing, syncing, and querying data for your mobile, web, and IoT apps at global scale.
                    </p>
                </div>
            </aside>
        `
    }
}

customElements.define('profile-figure', Profile);
