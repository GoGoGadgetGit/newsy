import React, { Component } from 'react';

import NewsSource from './NewsSource';

class NewsStory extends Component {
    render () {
        return (
            // <li key={this.props.pageSix.author}>
            //     <h3>{this.state.pageSix.title}</h3>
            //     <p>{this.props.from.description}</p>
            // </li>

            <li>
            <h3>{this.props.article.title}</h3>
            <p>{this.props.article.description}</p>
            <img src ={this.props.article.urlToImage} alt ="" />
            </li>

        );
    }
}

export default NewsStory;