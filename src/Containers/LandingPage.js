import React, {Component} from 'react';

import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => 
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 33.057133, lng: -117.261168 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 33.057133, lng: -117.261168 }} />}
  </GoogleMap>
)



export class LandingPage extends Component {
    render() {
        return (
            <div>
                <MyMapComponent isMarkerShown/>
            </div>
        );
    }
}

export default LandingPage;
