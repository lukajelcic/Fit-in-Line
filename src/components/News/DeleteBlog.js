import React, { Component, Fragment } from 'react'
import withstyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';

//MUI Stuff
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';

//REDUX
import { connect } from 'react-redux';
import { deleteBlog } from '../../redux/actions/dataActions';


const styles = {
}

class DeleteBlog extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }
    handleOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false })
    }
    deleteBlog = () => {
        this.props.deleteBlog(this.props.newsId)
        this.setState({ open: false })
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <MyButton tip='Obrisi Blog'
                    onClick={this.handleOpen}
                    btnClassName={classes.deleteButton}
                >
                    <DeleteIcon className={classes.del} color='secondary' />
                </MyButton>

                <Dialog open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth='sm'
                >
                    <DialogTitle>
                        Are you sure you want to delete this post?
                </DialogTitle>

                    <DialogActions>
                        <Button onClick={this.handleClose} color='primary'>Cancel</Button>
                        <Button onClick={this.deleteBlog} color='secondary'>Delete</Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

DeleteBlog.propTypes = {
    deleteBlog: PropTypes.func.isRequired,
    newsId: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
}

export default connect(null, { deleteBlog })(withstyles(styles)(DeleteBlog))