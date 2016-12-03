import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place';

import styles from './styles.scss';

export default class SimpleMapPage extends Component {
  static defaultProps = {
    center: { lat: 59.938043, lng: 30.337157 },
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };
  /*
  constructor(props) {
    super(props);
  }
  */

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div className={styles.SimpleMapPage}>
        <GoogleMap
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
          <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
        </GoogleMap>
      </div>
    );
  }
}

/* eslint-disable */
SimpleMapPage.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  greatPlaceCoords: PropTypes.object,
};
