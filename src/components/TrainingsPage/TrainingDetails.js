import React, { Component } from 'react'
import axios from 'axios'

class TrainingDetails extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default TrainingDetails;
