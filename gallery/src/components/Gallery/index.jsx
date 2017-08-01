import React, { Component } from 'react';
import './styles.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      currentItem: 0
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown(e) {
    switch (e.key) {
      case 'j':
        this.slideLeft();
        break;
      case 'k':
        this.slideRight();
        break;
      default:
        break;
    }
  }

  slideLeft() {
    const {
      currentItem
    } = this.state;
    const {
      photos,
      width
    } = this.props;
    const nextItem = currentItem < photos.length -1 ? currentItem + 1 : 0;
    this.photoBox.style.marginLeft = `-${width * nextItem}px`;
    this.setState({currentItem: nextItem});
  }

  slideRight() {
    const {
      currentItem
    } = this.state;
    const {
      photos,
      width
    } = this.props;
    const nextItem = currentItem > 0 ? currentItem - 1 : photos.length - 1;
    this.photoBox.style.marginLeft = `-${width * nextItem}px`;
    this.setState({currentItem: nextItem});
  }

  render() {
    const {
      photos,
      width
    } = this.props;
    const {
      currentItem
    } = this.state;
    return(
      <div>
        <p>{`${currentItem} ${photos.length}`}</p>
        <div className="photos" style={{width}}>
          <div
            className="photos--items"
            ref={div => this.photoBox = div}
          >
            {photos.map(photo => (
              <div key={photo.id} className="photos--photo">
                <img className="photos--img" src={photo.url} alt=""/>
                <p className="photos--title">{photo.title}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={this.slideRight}>Pre</button>
        <button onClick={this.slideLeft}>Next</button>
      </div>
    );
  }
}

Gallery.defaultProps = {
  photos: [
    {
      id: 1,
      title: 'default title',
      url: 'http://placehold.it/600'
    },
    {
      id: 2,
      title: 'default title',
      url: 'http://placehold.it/600/bada55'
    }
  ],
  currentItem: 0,
  width: 400
}

export default Gallery;
