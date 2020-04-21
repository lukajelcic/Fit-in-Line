import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';


const styles = {
    root: {
        maxWidth: 400,
        padding: 10
    },
    titleCard:{
        textAlign:"center",
        fontFamily:"Montserrat",
        fontWeight:"400",
        marginBottom:"20px",
        color: "#095358",
    },
    media: {
        height: 0,
        paddingTop: '50%'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    cardBody:{
        padding:10
    },
    program:{
        textAlign:'center',
    }
}

class TrainingType extends Component {
    state = {
        expanded: false
    }

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded })
    }
    render() {
        const { classes } = this.props
        return (
            <Card className={classes.root}>
                <Typography variant="h5" className={classes.titleCard}>{this.props.item.title}</Typography>
                <CardMedia
                    className={classes.media}
                    image={this.props.item.url}
                    title={this.props.item.title} />
                <CardActions disableSpacing>
                    <Tooltip title={this.state.expanded ? "Hide" : "Show more"}>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.IconButtonexpanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>

                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <Typography variant="body2" component="p" className={classes.cardBody}>{this.props.item.text}</Typography>
                    <br />
                    <Typography variant="h6" className={classes.titleCard}>{this.props.item.trng_h2}</Typography>
                    <br />
                    <Typography component="li">{this.props.item.li1}</Typography>
                    <Typography component="li">{this.props.item.li2}</Typography>
                    <Typography component="li">{this.props.item.li3}</Typography>
                    <Typography component="li">{this.props.item.li4}</Typography>
                    <Typography component="li">{this.props.item.li5}</Typography>
                    <Typography component="li">{this.props.item.li6}</Typography>
                    <Typography component="li">{this.props.item.li7}</Typography>
                    <Typography component="li">{this.props.item.li8}</Typography>
                    <Typography component="li">{this.props.item.li9}</Typography>
                </Collapse>
            </Card>
        )
    }
}


export default (withStyles(styles))(TrainingType);