import React, { Component } from 'react';
import Popup from './Popup'
import HeadContent from '../HeadContent/HeadContent'

import './gallery.css'
import '../HeadContent/HeadContent.css';

class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrlArray: [
                "https://scontent.fbeg10-1.fna.fbcdn.net/v/t1.0-9/317031_103248916458565_359750296_n.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=J759YOxsI7IAX-jKtwF&_nc_ht=scontent.fbeg10-1.fna&oh=ab55ba11a2835020df3926fcfcee8949&oe=5E999C28",
                "https://scontent.fbeg10-1.fna.fbcdn.net/v/t1.0-9/310667_103248673125256_1830099480_n.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=Xj8NRHE5tT8AX--H1sl&_nc_ht=scontent.fbeg10-1.fna&oh=ffa693a0e8875bbecd837e1375723654&oe=5E822A50",
                "https://scontent.fbeg10-1.fna.fbcdn.net/v/t1.0-9/315040_103248649791925_633763993_n.jpg?_nc_cat=105&_nc_sid=e007fa&_nc_ohc=xeRf3gT_c64AX-vI3Dj&_nc_ht=scontent.fbeg10-1.fna&oh=6dc58860d0fc64ba01a971751f554885&oe=5E99AEA6",
                "https://scontent.fbeg10-1.fna.fbcdn.net/v/t1.0-9/373884_103248573125266_1985205443_n.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=c6Dx9UoUoCgAX-wgOEl&_nc_ht=scontent.fbeg10-1.fna&oh=162e9dd5d05af40118c8797596f8a3af&oe=5E808701",
                "https://scontent.fbeg10-1.fna.fbcdn.net/v/t1.0-9/381465_103248543125269_511897444_n.jpg?_nc_cat=109&_nc_sid=e007fa&_nc_ohc=Bzn-xuuHxDYAX8t52Sr&_nc_ht=scontent.fbeg10-1.fna&oh=cf5b1441ede4554011c0d0c4bcce5d98&oe=5E93A450",
                "https://scontent.fbeg10-1.fna.fbcdn.net/v/t1.0-9/388989_103248419791948_1357540392_n.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=UxOyFRo0sEkAX9_xTPC&_nc_ht=scontent.fbeg10-1.fna&oh=63ce6c2b07902284f245d762edc7a7ff&oe=5E979BCD",
                "https://scontent.fbeg10-1.fna.fbcdn.net/v/t1.0-9/383590_103248349791955_53509021_n.jpg?_nc_cat=108&_nc_sid=e007fa&_nc_ohc=n-NV3qMz8gQAX8RFw7w&_nc_ht=scontent.fbeg10-1.fna&oh=5bd90c843eb7d3275afa1ad8283d5d9a&oe=5E8021CD",
            ],
            showModal: false,
            popImageUrl: ""
        }
        this.handlePopup = this.handlePopup.bind(this);
    }

    handlePopup = (url) => {
        this.setState({
            showModal: !this.state.showModal,
            popImageUrl: url
        })
    }

    render() {
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, index) => {
            return (
                    <img
                        className="singleImage"
                        src={url}
                        onClick={() => this.handlePopup(url)}
                        key={index}
                        alt="/"
                    >
                    </img>
            )
        })
        return (
            <div style={{marginTop:'100px'}}>
                <HeadContent />
            <div className="gallery-container">
                {images}
                {this.state.showModal ? (
                    <Popup
                        popImageUrl={this.state.popImageUrl}
                        closePopup={this.handlePopup}
                    />
                ) : null}
            </div>
            </div>
        )
    }
}

export default Images;