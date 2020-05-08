import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import MyButton from '../../util/MyButton';


const styles = {
    btn: {
        zIndex: 1,
    },
    text:{
        marginTop:'15px'
    }
}

class TrainingTypeR extends Component {
    state = {
        expanded: true
    }

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded })
    }
    render() {
        const { expanded } = this.state
        const { classes } = this.props
        return (
            <div className="container-fluid p-1 content" key={this.props.item.id}>
                <MyButton tip={expanded ? "Prikazi manje" : "Prikazi vise"} onClick={this.handleExpandClick}>
                    {expanded ? <RemoveCircleOutlineIcon color="primary" fontSize="large" btnClassName={classes.btn} /> : (
                        <AddCircleOutlineIcon color="primary" fontSize="large"  btnClassName={classes.btn} />)}
                </MyButton>
                <span className="title">{this.props.item.title}</span>
                <div className={expanded ? "toggle-conent" : "hide-content"}>
                    <img className="img" src={this.props.item.url}></img>
                    <div className={classes.text}>
                    <p>{this.props.item.text}<Link to={'/programs/'+this.props.item.id + '/' + this.props.item.title}> saznaj vise...</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}


export default (withStyles(styles))(TrainingTypeR);