import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';

//MUI
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

//REDUX
import { connect } from 'react-redux';
import { postBlog } from '../../redux/actions/dataActions';

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
    state = {
        open: false,
        title: '',
        body: '',
        errors: {}
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
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <MyButton tip="Postavi Blog" onClick={this.handleOpen}>
                    <AddIcon />
                </MyButton>

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
                        </form>
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}


PostBlog.propTypes = {
    postBlog: PropTypes.func.isRequired,
}

export default connect(null, { postBlog })(withStyles(styles)(PostBlog))