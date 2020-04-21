import React, { Component } from 'react';
import Popup from './Popup'
import HeadContent from '../HeadContent/HeadContent'
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';

import './gallery.css'
import '../HeadContent/HeadContent.css';

class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrlArray: [
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img7
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