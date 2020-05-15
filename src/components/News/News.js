import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import './News.css';

import { connect } from 'react-redux';
import { getNews } from '../../redux/actions/dataActions';

import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
}

class News extends Component {
    constructor() {
        super();
        this.state = {
            news: null
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
        this.props.getNews();
    }
    render() {
        const { loading, news } = this.props.data
        const { classes } = this.props

        let recentBlogs = !loading ? (
            news.map((blog) => <NewsCard key={blog.newsId} blog={blog} />)
        ) : <CircularProgress size={60} className={classes.progress} />
        return (
            <main className="news-page">
                <div className="background"></div>
                <article className="news-article">
                    <div className="page-head">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <div className="news-main-image">
                                    <div className="col-md-6 col-sm-12 col-lg-6 mt-2 slider-box" id="news-sld">
                                        <h1 className="slider-title">
                                            Budite u toku sa najnovijim vestima
                            </h1>
                                        <p className="slider-txt" style={{fontSize:'18px',color:'rgb(68, 71, 76)'}}>
                                            Pratite nas ukoliko želite da budete redovno informisani o novostima koji se tiču fitness zajednice Fit in Line.
                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <h2 className="news-title" style={{ fontWeight: '500' }}>Aktuelne Vesti</h2>
                <hr className="hr-title" style={{ width: '300px', border: '1px solid lightgray' }}></hr>

                <div className="news-wrapper">
                    <div className="main-news">
                        {recentBlogs}
                        
                    </div>
                </div>
            </main>

        )
    }
}

News.propTypes = {
    getNews: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps, { getNews })(withStyles(styles)(News));