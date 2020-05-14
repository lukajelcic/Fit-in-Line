import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import MyButton from '../../util/MyButton';


const styles = {
    btn: {
        zIndex: 1
    },
    text:{
        marginTop:'15px'
    }
}

class TrainingTypeL extends Component {
    state = {
        expanded: true
    }

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded })
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        const { classes } = this.props
        const { expanded } = this.state
        return (
            <div className="container p-1 content col-10" key={this.props.item.id}>
                <MyButton tip={expanded ? "Prikazi manje" : "Prikazi vise"} onClick={this.handleExpandClick} btnClassName={classes.btn} >
                    {expanded ? <RemoveCircleOutlineIcon style={{color:'rgb(9, 83, 88)'}} fontSize="large" /> : (
                        <AddCircleOutlineIcon style={{color:'#cf7303 '}} fontSize="large"  />)}
                </MyButton>
                <span className="title" style={ {color:'rgb(9, 83, 88)'}}>{this.props.item.title}</span>
                <div className={expanded ? "toggle-conent" : "hide-content"}>
                    <img className="img" src={this.props.item.url}></img>
                    <div className={classes.text}>
                        <p>{this.props.item.text}<Link style={{textDecoration:'none'}} to={'/programs/'+this.props.item.id}> saznaj vise...</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}


export default (withStyles(styles))(TrainingTypeL);