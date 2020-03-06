import React from 'react';

import './gallery.css'

class Popup extends React.Component{
    render(){
        return(
            <div className="popupParent">
                <div className="popupImage">
                    <p
                    className="imageClosingButton"
                    onClick={this.props.closePopup}
                    >
                        Close
                    </p>

                    <img src={this.props.popImageUrl} alt="/" style={{width:'450px',height:'450px'}}></img>
                </div>
            </div>
        )
    }
}

export default Popup;