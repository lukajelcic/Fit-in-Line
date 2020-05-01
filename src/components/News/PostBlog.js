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


//REDUX
import { connect } from 'react-redux';
import { postBlog } from '../../redux/actions/dataActions';
import { logoutUser } from '../../redux/actions/userActions';


//Firebase
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import config from '../../firebase';

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
    },
    fileuploader: {
        float: 'right'
    }
}


class PostBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            image: '',
            imageUrl: null,
            title: '',
            body: '',
            errors: {},
            progress: 0
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
            body: this.state.body,
            imageUrl: this.state.imageUrl
        }
        this.props.postBlog(newNews);
        this.setState({ open: false });
    }

    handleUploadStart = () => {
        this.setState({
            progress: 0
        })
    }

    handleUploadSuccess = filename => {
        this.setState({
            imageUrl: filename,
            progress: 100
        })
        firebase.storage().ref('news images').child(filename).getDownloadURL()
            .then(url => {
                this.setState({
                    imageUrl: url,
                    progress: 100
                })
            })
    }

    render() {
        const { errors } = this.state
        const { classes, UI: { loading }, user: { authenticated } } = this.props
        return (
            <Fragment>
                <MyButton tip="Postavi Blog" onClick={this.handleOpen}>
                    <AddIcon color="primary" />
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
                                    placeholder="Naslov bloga"
                                    required />

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
                                    placeholder="Sadrzaj bloga ..."
                                    required />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submitButton}
                                    disabled={!this.state.progress}
                                >
                                    Dodaj blog
                            </Button>


                                <FileUploader
                                    className={classes.fileuploader}
                                    accept="image/*"
                                    name="imageUrl"
                                    storageRef={firebase.storage().ref('news images')}
                                    onUploadStart={this.handleUploadStart}
                                    onUploadSuccess={this.handleUploadSuccess}
                                    required
                                />
                            </form>
                        </DialogContent>
                    </Dialog> : null
                }
            </Fragment>
        )
    }
}

PostBlog.propTypes = {
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
    logoutUser
}


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(PostBlog));
