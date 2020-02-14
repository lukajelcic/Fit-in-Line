import React, { Component } from 'react';

import './Question.css';

class QuestionRight extends Component {
    constructor() {
        super();
        this.state = {
            opened: false
        }
    }
    render() {
        const { opened } = this.state;
        return (
            <div className="toggle-card" onClick={() => this.setState({ opened: !opened })}>
                <h5 className="toggle-title">{this.props.item.title}</h5>
                {opened
                    ?
                    <div className="toggle-conent">
                        <p>{this.props.item.text}</p>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default QuestionRight;