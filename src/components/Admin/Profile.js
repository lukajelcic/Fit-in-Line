import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

//MUI Stuff
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


//ICONS
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MyButton from '../../util/MyButton';

import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';

const styles = {
    profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: '80%',
                left: '70%'
            }
        },
        '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
        },
        '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
                verticalAlign: 'middle'
            },
            '& a': {
                color: '#00bcd4'
            }
        },
        '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
        },
        '& svg.button': {
            '&:hover': {
                cursor: 'pointer'
            }
        }
    }
}

class Profile extends Component {
    handleLogout = () => {
        this.props.logoutUser()
    }
    render() {
        const { classes } = this.props
        const { user: { handle, createdAt, authenticated } } = this.props
        let profileMarkup = authenticated ? (
            <Paper>
                <div className={classes.profile}>
                    <div className="image-wrapper">
                        <img src="" alt="profile picture" className="profile-image"></img>
                        <input
                            type='file'
                            id='imageInput'
                            hidden='hidden'
                            onChange={this.handleImageChange}
                        />
                        <Typography variant="h3" color="primary"> {handle}</Typography>

                    </div>
                    <MyButton tip='Edit profile picture' onClick={this.handleEditPicture} btnClassName='buttons'>
                        <EditIcon />
                    </MyButton>
                    <MyButton tip='Logout' onClick={this.handleLogout}>
                        <ExitToAppIcon color='primary' />
                    </MyButton>

                    <CalendarToday color='primary' />{' '}
                    <span>
                        Joined: {dayjs(createdAt).format('MM YYYY')}
                    </span>
                </div>
            </Paper>
        ) : null
        return profileMarkup;
    }
}

Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { logoutUser })(withStyles(styles)(Profile))