import React, { Component } from 'react';
import withstyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteBlog from './DeleteBlog';
import MyButton from '../../util/MyButton';


import EditIcon from '@material-ui/icons/Edit';


const styles = {

}
class NewsCard extends Component {
    render() {
        const {
            blog: {
                newsId,
                body,
                title,
                imageUrl
            },
            user: {
                authenticated,
            }
        } = this.props;
        return (
            <section className="news-card-section" >
                <article className="news-card">

                    <hr className="hr-pin" style={{ width: '32px', left: '-10px', top: '-5px' }}></hr>
                    <hr className="hr-pin" style={{ width: '45px', left: '-10px', top: '0px' }}></hr>

                    <div className="news-img">
                        <a href="/">
                            <img style={{ width: 300, height: 200 }} src={imageUrl} alt="/"></img>
                        </a>
                    </div>
                    <h3 className="entry-title"><a href="/">{title}</a></h3>

                    <div className="entry-content">
                        <p>{body}</p>
                    </div>

                </article>
            </section>
        )
    }
}

NewsCard.propTypes = {
    user: PropTypes.object.isRequired,
    blog: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user,
    data: state.data
});

export default connect(mapStateToProps, null)(withstyles(styles)(NewsCard));