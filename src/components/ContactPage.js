import React from 'react';
import GoogleMapReact from 'google-map-react';
import AnimatedText from './AnimatedText';
import { email, apikey } from '../credentials';

const display = (stringToBeAnimated) => {
  return stringToBeAnimated.split('').map((letter, index) => {
    return <AnimatedText key={index}>{letter}</AnimatedText>;
  });
};

const AnyReactComponent = () => <i className="fas fa-map-marker-alt fa-3x map-marker"></i>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 28.6082606,
      lng: 77.0350863
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCTTx91EQ6_tgV6x-jOEyFIp5ZXj5jcrlQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={createMapOptions}
        >
        <AnyReactComponent
            lat={28.6082606}
            lng={77.0350863}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

function createMapOptions(maps) {
  return {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [{elementType: 'geometry', stylers: [{color: '#02b196'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [{color: '#c9b2a6'}]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'geometry.stroke',
      stylers: [{color: '#dcd2be'}]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ae9e90'}]
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [{color: '#02b196'}]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{color: '#02b196'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#4d4d4e'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [{color: '#02b196'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#447530'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#4d4d4e'}]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{color: '#4d4d4e'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#4d4d4e'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#4d4d4e'}]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [{color: '#4d4d4e'}]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry.stroke',
      stylers: [{color: '#4d4d4e'}]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{color: '#4d4d4e'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{color: '#4d4d4e'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.fill',
      stylers: [{color: '#4d4d4e'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#4d4d4e'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{color: 'white'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [{color: '#b9d3c2'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#92998d'}]
    }
]
  }
};


const ContactPage = () => (
  <div className="full-page right-side">
    <div className="right-side__title about-page__title">
    {display("Contact")}
    <span> </span>
    <span> </span>
    {display("Me")}  
    <h3>Feel free to contact me on any of these platforms!</h3>  

    <div className="contact-page">

      <div className="contact-page__form">
        <div className="contact__icons">
        <a href="mailto:sarthakgupta259@gmail.com" target="_blank"><i className="fas fa-envelope fa-3x"></i></a>
        <a href="https://github.com/sar-gupta" target="_blank"><i className="fab fa-github-square fa-3x"></i></a>
        <a href="https://medium.com/@sargupta" target="_blank"><i className="fab fa-medium fa-3x"></i></a>                
        <a href="https://www.facebook.com/sarthak.gupta.259" target="_blank"><i className="fab fa-facebook fa-3x"></i></a>
        </div>
      </div>

      

    </div>
    <div className="contact-page__map show-for-desktop">
        <SimpleMap />
      </div>

  </div> 
  
  </div> 
);

export default ContactPage;