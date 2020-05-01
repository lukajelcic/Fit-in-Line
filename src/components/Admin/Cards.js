import React, { Component } from 'react';
import withstyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteBlog from '../News/DeleteBlog';
import MyButton from '../../util/MyButton';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        maxHeight: 345
    },
    media: {
        height: 140
    }
}
class Cards extends Component {
    render() {
        const { classes } = this.props
        const { blog: { newsId, title, body, imageUrl }, user: { authenticated } } = this.props
        const deleteButton = authenticated ? (<DeleteBlog newsId={newsId}>Izbrisi</DeleteBlog>
        ) : null
        return (
            <Card className={classes.root}>
                <CardMedia
                    image={imageUrl}
                    className={classes.media}
                    title="Fit in Line blog"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">{title}</Typography>
                    <Typography variant="body2" color="textPrimary" component="p">{body}</Typography>
                </CardContent>

                <CardActions>
                    {deleteButton}
                    <Button size="small" color="primary">Izmeni</Button>
                </CardActions>
            </Card>
        )
    }
}

Cards.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    blog: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user,
    data: state.data
})

export default connect(mapStateToProps, null)(withstyles(styles)(Cards))