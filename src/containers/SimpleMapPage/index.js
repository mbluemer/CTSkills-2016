import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import classNames from 'classnames';
import GoogleMap from 'google-map-react';
import axios from 'axios';
import MyGreatPlace from './my_great_place';

import styles from './styles.scss';

export default class SimpleMapPage extends Component {
  static defaultProps = {
    center: { lat: 41.6032, lng: -73.0877 },
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      domPoints: null,
    };
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const rowStyle = {
      margin: '4px',
    };
    /* eslint-disable */
    axios.get('https://data.ct.gov/resource/w3da-nijq.json')
      .then((response) => {
        const json_data = response.data;
        console.log(json_data);
        const other = json_data.map(entity => {
          if (entity.location_1.latitude && entity.location_1.longitude) {
            return (
              <MyGreatPlace
                lat={entity.location_1.latitude}
                lng={entity.location_1.longitude}
                text={entity.name}
              />
            );
          }
        });
        this.setState({ domPoints: other });
      })
      .catch(error => console.log(error));
    return (
      <div className="row" style={rowStyle}>
        <div className={classNames(styles.SimpleMapPage, 'col-lg-12')}>
          <GoogleMap
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          {this.state.domPoints}
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
