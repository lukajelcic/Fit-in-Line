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
                <article className="news-article">
                    <div className="page-head">
                        <header className="header-text">
                            <h1>{this.props.h1}</h1>
                            <h2>{this.props.h2}</h2>
                            <div className="news-text">
                                <p>
                                    {this.props.text}
                                    <strong> Fit in Line.</strong>
                                </p>
                            </div>
                        </header>

                        <aside className="news-image">
                            <figure>
                            <a href="/" className="link-img">
                                <img src="https://www.nuffieldhealth.com/_image/thumbnail/500x300%5E/?url=https://www.nuffieldhealth.com/local/36/f0/026fc8aa4081b4d73528d9c7a812/capture.PNG" alt="/"></img>
                                </a>
                            </figure>
                        </aside>
                    </div>
                </article>

                <hr style={{width:'90%'}}></hr>

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