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
                            <div className="slider-box" id="news-sld">
                                <h1 className="slider-title">
                                    Budite u toku sa najnovijim vestima
                            </h1>
                                <p className="slider-txt">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            </div>
                        </div>
                    </div>
                </article>

                <h2 className="news-title">Aktuelne Vesti</h2>
                <hr className="hr-title" style={{width:'300px',border:'1px solid lightgray'}}></hr>

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