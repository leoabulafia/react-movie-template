import React from 'react';

import bgImage from '../images/Landing.png';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';
import pic9 from '../images/pic9.jpg';
import pic11 from '../images/pic11.jpg';
import pic12 from '../images/pic12.jpg';
import pic13 from '../images/pic13.jpg';
import pic14 from '../images/pic14.jpg';
import pic15 from '../images/pic15.jpg';
import pic16 from '../images/pic16.jpg';
import pic18 from '../images/pic18.jpg';
import pic19 from '../images/pic19.jpg';
import pic20 from '../images/pic20.jpg';
import pic21 from '../images/pic21.jpg';
import pic22 from '../images/pic22.jpg';
import pic24 from '../images/pic24.jpg';
import pic17 from '../images/pic17.jpg';

import ImageGallery from 'react-image-gallery';

export class Gallery extends React.Component {
  render() {
    const images = [
      {
        original: pic2,
        thumbnail: pic2,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic3,
        thumbnail: pic3,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic6,
        thumbnail: pic6,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic7,
        thumbnail: pic7,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic9,
        thumbnail: pic9,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic11,
        thumbnail: pic11,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic12,
        thumbnail: pic12,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic13,
        thumbnail: pic13,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic14,
        thumbnail: pic14,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic15,
        thumbnail: pic15,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic16,
        thumbnail: pic16,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic17,
        thumbnail: pic17,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic18,
        thumbnail: pic18,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic19,
        thumbnail: pic19,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic20,
        thumbnail: pic20,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic21,
        thumbnail: pic21,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic22,
        thumbnail: pic22,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: pic24,
        thumbnail: pic24,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
    ];
    return (
      <div style={bg} className="gallery background-gallery">
        <div style={bgLayer}>
          <div style={containerGallery}>
            <section className="app">
              <ImageGallery
                items={images}
                lazyLoad={true}
                infinite={true}
                showBullets={true}
                showFullscreenButton={true}
                showPlayButton={true}
                showThumbnails={true}
                showNav={true}
                thumbnailPosition="bottom"
                slideDuration={parseInt(800)}
                slideInterval={parseInt(5000)}
              />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;

//STYLES

var containerGallery = {
  // maxWidth: '886px',
  margin: 'auto',
  // paddingBottom: '3em',
  // paddingTop: '8em'
  // border: '5px solid #fff',
  // borderRadius: '8px'
}

var title = {
  color: '#fff',
  marginTop: '20vh',
  marginBotton: '10vh',
  textAlign: 'center'
}

var bg = {
  minHeight: '100vh',
  marginTop: '-80px'
}

var bgLayer = {
  backgroundColor: 'rgba(0, 0, 128, 0.1)',
  width: '100%',
  height: '100%',
  minHeight: '100vh'
}
