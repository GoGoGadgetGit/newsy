import React, { Component } from 'react';
import NewsStory from './NewsStory';

class NewsSource extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageSix: [],
        };
    }

    componentWillMount() {
          fetch('https://newsapi.org/v1/articles?source=' + this.props.from + '&apiKey=f40d034460f54869b8d1025110c3186b')
            .then(response => response.json())
            .then(response => {
              this.setState({
                pageSix: response.articles,
              });
            });
        }

    render () {
        const news = [];

        // this.state.pageSix 

        for (let i = 0; i < this.state.pageSix.length; i++){
            news.push(<NewsStory article={this.state.pageSix[i]} />)
        }

        // const news = this.state.pageSix.map(story => <NewsStory article={story} />)

        return (
            <div>
                {news}
            </div>

        );
    }
}

export default NewsSource;