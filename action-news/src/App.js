import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import NewsStory from './Components/NewsStory';
import NewsSource from './Components/NewsSource';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSix: [],
    };
  }

  // handlepageSxi() {
  // //   console.log('making api request, search for ' + term);
  //   fetch('https://newsapi.org/v1/articles?source=techcrunch&apiKey=f40d034460f54869b8d1025110c3186b')
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({
  //         pageSix: response.results,
  //       });
  //     });


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <NewsSource from="techcrunch" />
        <NewsSource from="cnn" />
        {/* <NewsSource from="huffington-post" /> */}
      </div>
    );
  }
}

export default App;
