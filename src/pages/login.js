import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';

//MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';


const styles = {
    form: {
        textAlign: 'center',
        margin: '30px 30px 30px 30px'
    },
    pageTitle: {
        margin: '10px auto 10px auto',
        fontFamily: 'Montserrat'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20,
        position: 'relative'
    },
    progress: {
        position: 'absolute',
        color: 'orange'
    },
}

class login extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            email: '',
            password: '',
            errors: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData, this.props.history.push('/dashboard'))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { errors } = this.state
        const { classes, UI: { loading } } = this.props
        return (
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm>
                    <Typography variant="h3" color="primary" className={classes.pageTitle}>Prijava</Typography>

                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            fullWidth
                            value={this.state.email}
                            className={classes.textField}
                            onChange={this.handleChange} />

                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            fullWidth
                            value={this.state.password}
                            className={classes.textField}
                            onChange={this.handleChange} />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            disabled={loading}
                        >
                            {loading && (
                                <CircularProgress size={30} className={classes.progress} />
                            )}
                            Prijavi se
                        </Button>
                    </form>
                </Grid>
                <Grid item sm />
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(login));