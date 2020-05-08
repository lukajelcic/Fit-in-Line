import React, { Component } from 'react';
import withStyles, { withstyles } from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const styles = {

}
class NewsCard extends Component {
    render() {
        const {
            blog: {
                newsId,
                body,
                title,
                imageUrl,
                createdAt
            },
            user: {
                authenticated,
            }
        } = this.props;
        return (
            <section className="news-card-section" >
                <article className="news-card" key={newsId}>
                    <Link to={'/news/' + newsId} style={{textDecoration:'none'}}>
                        <div className="news-img">
                            <img style={{ width: 300, height: 200,borderRadius:'10px' }} src={imageUrl} alt="/"></img>
                        </div>
                        <small ><span><i id="clock" className="fa fa-clock-o" style={{ color: '#cf7303' }} /></span>{createdAt}</small>
                        <h3 className="entry-title">{title}</h3>
                    </Link>
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

export default connect(mapStateToProps, null)(withStyles(styles)(NewsCard))