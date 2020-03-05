import React, { Component } from 'react';

import news from './newsFiles';
import './News.css'

import NewsCard from './NewsCard';

class News extends Component {
    constructor() {
        super();
        this.state = {
            newsCards: news
        }
    }
    render() {
        const newsItems = this.state.newsCards.map(item => <NewsCard key={item.id} item={item} />)
        return (
            <main className="news-page">
                <div className="background"></div>
                <article className="news-article">
                    <div className="page-head">
                        <div className="news-main-image">
                            <div className="slider-box" style={{ height: '250px' }}>
                                <h1 className="slider-title">
                                    Budite u toku sa najnovijim vestima
                            </h1>
                                <p className="slider-txt">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            </div>
                        </div>
                        <h2 className="entry-title"><a href="/">Aktuelne Vesti</a></h2>
                    </div>
                </article>


                <div className="news-wrapper">
                    <div className="main-news">
                        {newsItems}
                    </div>
                </div>
            </main>

        )
    }
}

export default News;