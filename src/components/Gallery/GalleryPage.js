import React, { Component } from 'react';

import Images from './Images';

class GalleryPage extends Component {
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