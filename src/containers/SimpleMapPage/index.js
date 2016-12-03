import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import classNames from 'classnames';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place';

import styles from './styles.scss';

export default class SimpleMapPage extends Component {
  static defaultProps = {
    center: { lat: 41.6032, lng: -73.0877 },
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
    const rowStyle = {
      margin: '4px',
    };
    return (
      <div className="row" style={rowStyle}>
        <div className={classNames(styles.SimpleMapPage, 'col-lg-12')}>
          <GoogleMap
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
            <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
          </GoogleMap>
        </div>
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
