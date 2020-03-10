import React, {Component} from 'react';

import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

import fancyMapStyles from '../MapStyle.json';

import Iframe from 'react-iframe';

import Locations from '../Lists/Locations';

import './LandingPage.css';

console.log("locations", Locations);

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="MapContainerElement"  />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => 
  <GoogleMap
    defaultZoom={10.8}
    defaultCenter={{ lat: 32.849264, lng: -117.210677 }}
    defaultOptions={{ styles: fancyMapStyles }}
  >  
    {Locations.map( ( loc ) => {
      return <Marker onClick={() => props.markerclicked(loc.name, loc.myChart)} key={loc.lat} position={{lat: loc.lat, lng: loc.lng }} />
    })}
    
  </GoogleMap>
)



export class LandingPage extends Component {
  constructor(props){
    super(props);
      this.state = {
        link: '',
        name: '',
      }
    }

    markerClicked =( name, link) => {
      console.log("clicked", name, link);
      this.setState({
        name,
        link
      })
    }
    render() {
        return (
            <div className="LocationsLandingWrapper">
    
                <Iframe 
                  url={this.state.link}
                  width="45%"
                  height="800px"
                  className="IframeLocationMyChart"
                />
                <MyMapComponent markerclicked={this.markerClicked} isMarkerShown/>
            </div>
        );
    }
}

export default LandingPage;
