import React, { Component } from 'react';

import './buttons.css'

class TrainingBtn extends Component {
    constructor() {
        super();
        this.state = {
            arrowClicked: false
        }
    }

    changeArrow = () => {
        this.setState({
            arrowClicked: !this.state.arrowClicked
        })
    }

    render() {
        return (
            <div style={{ marginLeft: '10px' }}>
                <div className="center-con">
                    <div className="round">
                        <a href="#rsv" onClick={this.changeArrow}>
                            <i className={this.state.arrowClicked ? "up" : "down"}></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrainingBtn;