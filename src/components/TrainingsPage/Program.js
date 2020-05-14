import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import '../TrainingTypes/TrainingType.css'

import types from '../TrainingTypes/types';

import TrainingType from '../TrainingTypes/TrainingType';


const styles = {
}

class Program extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainingTypes: types,
        }
    }
    render() {
        const typeItems = this.state.trainingTypes.map(item => <TrainingType key={item.id} item={item} />)
        return (
            <div className="types_wrapp">
                <div className="type">{typeItems}</div>
            </div>
        )
    }
}

export default withStyles(styles)(Program);
