import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import * as action from './action';

import styles from './styles.scss';

export default class LeafletMap extends Component {

  // Fetching data method for both server/client side rendering
  static fetchData(dispatch) {
    return Promise.all([
      dispatch(action.fetchDataIfNeeded()),
    ]);
  }

  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }

  componentDidMount() {
    /*
    const { dispatch } = this.props;

    // Fetching data for client side rendering
    LeafletMap.fetchData(dispatch);
    */
  }

  // Prevent the components which with the same props and state are rendered repeatly
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map className={styles.LeafletMap} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

/*
LeafletMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  lat: 51.505,
  lng: -0.09,
  zoom: 13,
});
*/

// export default connect(mapStateToProps)(LeafletMap);
