import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import MyButton from '../../util/MyButton';
import axios from 'axios';

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
import { editBlog, getOnePost,getNews } from '../../redux/actions/dataActions';
import Axios from 'axios';

const styles = {
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        float: 'right'
    }
}


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsId:'',
            title: '',
            body: '',
            open: false,
        }
    }
    mapBlogDetailsToState = (blog) => {
        this.setState({
            newsId:blog.newsId ? blog.newsId : '',
            title: blog.title ? blog.title : '',
            body: blog.body ? blog.body : ''
        })
    }

    componentWillMount(){
        this.props.getOnePost(this.props.newsId)
    }

    handleOpen = () => {
        this.setState({ open: true })
        this.mapBlogDetailsToState(this.props.blog)
        console.log(this.props.blog)
    }
    handleClose = () => {
        this.setState({ open: false })
        this.setState({
            newsId:'',
            title : '',
            body: ''
        })
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const blogDetails = {
            title:this.state.title,
            body:this.state.body
        }
        axios.put(`/news/${this.props.newsId}`,blogDetails)
        this.setState({
            open:false
        })
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
                    <DialogTitle>Izmeni Blog</DialogTitle>
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
    classes: PropTypes.object.isRequired,
    blog: PropTypes.object.isRequired,
    newsId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    blog: state.data.blog,
})

const mapActionsToProps = {
    editBlog,
    getOnePost,
    getNews
    
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Edit))
