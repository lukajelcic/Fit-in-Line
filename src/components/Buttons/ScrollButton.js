import React, { Component } from 'react';

import './buttons.css'

class ScrollButton extends Component {
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
            <div style={{ marginLeft: '10px'}}>
                <div className="center-con">
                    <div className="round" onClick={this.changeArrow}>
                        <a href={this.state.arrowClicked ? "#rsv" : "#"}>
                            <i className={this.state.arrowClicked ? "up" : "down"}></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScrollButton;