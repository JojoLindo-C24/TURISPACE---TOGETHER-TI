import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import React, { Component } from 'react';
import './App.css';

export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { latitude: -23.6803333, longitude: 46.7079309, local: " São Paulo" },]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      />
    })
  }

  render() {
    return (

      

      <Map
        google={this.props.google}
        zoom={17}
        initialCenter={{ lat:-23.6803333, lng: -46.6388}}
      >

      {this.displayMarkers()}
      </Map>

    );
  }
}


export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A',
  }
))(MapContainer)