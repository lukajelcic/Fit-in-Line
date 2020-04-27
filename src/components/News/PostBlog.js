import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';
import PropTypes from 'prop-types';

//MUI
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';

import { connect } from 'react-redux';
import { postBlog, uploadImage } from '../../redux/actions/dataActions';
import { logoutUser } from '../../redux/actions/userActions';


const styles = {
    textField: {
        margin: '10px auto 10px auto'
    },
    closeButton: {
        position: 'absolute',
        left: '90%',
        top: '10%'
    },
    submitButton: {
        position: 'relative',
    },
    progressSpinner: {
        position: 'absolute'
    }
}


class PostBlog extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            title: '',
            body: '',
            errors: {}
        }
    }

    handleOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({
            open: false,
            title: '',
            body: '',
            errors: {}
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newNews = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.postBlog(newNews);
        this.setState({ open: false });
    }

    handleUploadImage = (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name)

        this.props.uploadImage(formData);
    }

    handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput')
        fileInput.click();
    }

    handleLogout = () => {
        this.props.logoutUser();
    }

    render() {
        const { errors } = this.state
        const { classes, UI: { loading }, user: { authenticated }, data: { blog: { imageUrl } } } = this.props
        return (
            <Fragment>
                <MyButton tip="Postavi Blog" onClick={this.handleOpen}>
                    <AddIcon color="primary" />
                </MyButton>

                <MyButton tip='Odjavi se' onClick={this.handleLogout}>
                    <ExitToAppIcon color='primary' />
                </MyButton>

                {authenticated ?
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        fullWidth
                        maxWidth="sm">

                        <MyButton tip="Zatvori" onClick={this.handleClose} tipClassName={classes.closeButton}>
                            <CloseIcon />
                        </MyButton>

                        <DialogTitle>Postavi Blog</DialogTitle>

                        <DialogContent>
                            <form onSubmit={this.handleSubmit}>
                                <TextField
                                    name="title"
                                    id="title"
                                    label="Naslov"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    fullWidth
                                    className={classes.textField}
                                    placeholder="Naslov bloga" />

                                <TextField
                                    name="body"
                                    id="body"
                                    label="Sadrzaj"
                                    value={this.state.body}
                                    onChange={this.handleChange}
                                    multiline
                                    rows="10"
                                    fullWidth
                                    className={classes.textField}
                                    placeholder="Sadrzaj bloga ..." />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submitButton}
                                >
                                    +
                            </Button>
                                <div className="image-wrapper">
                                    <input
                                        type='file'
                                        id='imageInput'
                                        hidden='hidden'
                                        onChange={this.handleImageChange}
                                    />
                                    <MyButton tip='Dodaj sliku' onClick={this.handleEditPicture} btnClassName='buttons'>
                                        <EditIcon />
                                    </MyButton>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog> : null
                }
            </Fragment>
        )
    }
}

PostBlog.propTypes = {
    uploadImage: PropTypes.func.isRequired,
    postBlog: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    UI: state.UI,
    user: state.user,
    data: state.data
})

const mapActionsToProps = {
    postBlog,
    logoutUser,
    uploadImage
}


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(PostBlog));