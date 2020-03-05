import React, { Component } from 'react';

import Images from './Images';

class GalleryPage extends Component {
    render() {
        return (
            <div>
                <div className="background"></div>
                <Images />
            </div>
        )
    }
}

export default GalleryPage;