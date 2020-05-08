import React, { Component } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MyButton from '../../util/MyButton';
import { withStyles } from '@material-ui/core/styles';

import typesL from '../TrainingTypes/typesL';
import typesR from '../TrainingTypes/typesR';
import TrainingTypeL from '../TrainingTypes/TrainingTypeL';
import TrainingTypeR from '../TrainingTypes/TrainingTypeR';


const styles = {
}

class Program extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainingTypesL: typesL,
            trainingTypesR: typesR
        }
    }
    render() {
        const typeItemsL = this.state.trainingTypesL.map(item => <TrainingTypeL key={item.id} item={item} />)
        const typeItemsR = this.state.trainingTypesR.map(item => <TrainingTypeR key={item.id} item={item} />)
        return (
            <div className="container-fluid">
                <div className="row p-4 m-2">
                    <div className="col-md-5 col-lg-6 col-sm-12 col-xs-12">{typeItemsL}</div>
                    <div className="col-md-5 col-lg-6 col-sm-12 col-xs-12">{typeItemsR}</div>
                </div>
            </div>

        )
    }
}

export default withStyles(styles)(Program);
