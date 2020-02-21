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
                            <h1>Vesti</h1>
                            <h2>Budite u toku!</h2>
                            <div className="news-text">
                                <p>
                                    Pratite nas ukoliko zelite da budete redovno informisani
                                    o novistima koje se ticu fitnes zajednice
                                    <strong> Fit in Line.</strong>
                                </p>
                            </div>
                        </header>

                        <aside className="news-image">
                            <figure>
                                <img src="https://www.nuffieldhealth.com/_image/thumbnail/500x300%5E/?url=https://www.nuffieldhealth.com/local/36/f0/026fc8aa4081b4d73528d9c7a812/capture.PNG" alt="/"></img>
                            </figure>
                        </aside>
                    </div>
                </article>
                <div className="main-news">
                    {newsItems}
                </div>
            </main>
        )
    }
}

export default News;