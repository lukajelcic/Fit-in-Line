import React, { Component } from 'react';

import Images from './Images';

class GalleryPage extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <div className="background"></div>
                <div className="image">
                    <Images />
                </div>
            </div>
        )
    }
}

export default GalleryPage;