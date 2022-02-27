import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./RenderMap.css";

export class MapContainer extends Component {
  state = { lat: "" };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.lat !== this.props.lat) {
      this.setState({ lat: this.props.lat });
    }
  }
  render() {
    if (!this.props.lat && !this.props.lon) {
      return <div className="renderMap">Loading!</div>;
    }

    console.log(this.props.lat, this.props.lon);

    const style = {
      width: "30%",
      height: "50%",
    };

    return (
      <div>
        <h2
          style={{
            // color: "rgb(255, 99, 132)",
            color: "#A0CA92",
            fontSize: "30px",
            marginTop: "-20px",
          }}
        >
          Knock! Knock! {this.props.city.toUpperCase()} here!
        </h2>
        <Map
          google={this.props.google}
          style={style}
          center={{
            lat: this.props.lat,
            lng: this.props.lon,
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD5Qjx3dfm-aN1KG6o5R0U1EqOvPWZGuA4",
})(MapContainer);
