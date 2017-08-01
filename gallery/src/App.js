import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(raw => raw.json())
      .then(photos => {
        this.setState({ photos: photos.slice(100, 110) })
      })
  }
  render() {
    return (
      <div className="App">
        <Gallery
          photos={this.state.photos}
          width={600}
        />
      </div>
    );
  }
}

export default App;
