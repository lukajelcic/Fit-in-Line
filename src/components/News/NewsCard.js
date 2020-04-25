import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withstyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';


import { connect } from 'react-redux';
const styles = {

}
class NewsCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes,
            blog: {
                body,
                title,
                imageUrl
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
    classes: PropTypes.object.isRequired,
    blog: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, null)(withstyles(styles)(NewsCard));