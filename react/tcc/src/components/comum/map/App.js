import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import React, { Component } from 'react';


export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { latitude: -23.6803333, longitude: -46.7079925, local: "Instituto nossa senhira de Fatima" },]
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

     
        <div style={{"position": "absolute", "width": "31%", "height": "55%"}}>
            <Map
              google={this.props.google}
              zoom={17.5}
              initialCenter={{ lat:-23.6803333, lng: -46.7079925}}
            >

            {this.displayMarkers()}
            </Map>
         </div>
   
        
    );
  }
}


export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyBmWg6SrxvblQHjMwlinmCLc9RU3bIu3-A',
  }
))(MapContainer)