import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import MyButton from '../../util/MyButton';

//MUI Stuff
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

//Icons
import EditIcon from '@material-ui/icons/Edit';

//Redux
import { connect } from 'react-redux';
import { editBlog } from '../../redux/actions/dataActions';

const styles = {
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        float: 'right'
    }
}

class Edit extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: '',
            open: false
        }
    }
    mapBlogDetailsToState = (blog) => {
        this.setState({
            title: blog.title ? blog.title : '',
            body: blog.body ? blog.body : '',
        })
    }

    componentDidMount() {
        const { blog } = this.props
        this.mapBlogDetailsToState(blog)
    }

    handleOpen = () => {
        this.setState({ open: true })
        this.mapBlogDetailsToState(this.props.blog)
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const blogDetails = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.editBlog(blogDetails)
        this.handleClose()
    }
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <MyButton tip='Izmeni blog' btnClassName={classes.button} onClick={this.handleOpen}>
                    <EditIcon color='primary' />
                </MyButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth='sm'
                >
                    <DialogTitle>Edit your details</DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField
                                id="title"
                                name="title"
                                type="text"
                                label="Naslov"
                                className={classes.textField}
                                value={this.state.title}
                                onChange={this.handleChange}
                                fullWidth />

                            <TextField
                                id="body"
                                name="body"
                                type="text"
                                label="Sadrzaj"
                                multiline
                                rows="7"
                                className={classes.textField}
                                value={this.state.body}
                                onChange={this.handleChange}
                                fullWidth />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Otkazi</Button>
                    </DialogActions>
                    <DialogActions>
                        <Button onClick={this.handleSubmit} color="primary">Sacuvaj</Button>
                    </DialogActions>
                </Dialog>
            </Fragment >
        )
    }
}

Edit.propTypes = {
    editBlog: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    blog: state.data.blog,
})

export default connect(mapStateToProps, { editBlog })(withStyles(styles)(Edit))
