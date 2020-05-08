import React, { Component } from 'react'
import TrainingTypeL from '../TrainingTypes/TrainingTypeL';

class TrainingDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            typeId:null,
            typeTitle:null
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        let title = this.props.match.params.title
        this.setState({
            typeId:id,
            typeTitle:title,
        })
        console.log(this.props)
    }
    render() {
        return (
            <div>
                {this.props.match.params.title}
            </div>
        )
    }
}

export default TrainingDetails;
