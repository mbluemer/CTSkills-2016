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
    /* eslint-disable */
    var json_data = {};
    var data = [];
    axios.get('https://data.ct.gov/resource/w3da-nijq.json')
      .then((response) => {
        json_data = response.data;
        // console.log(`response.data: ${response.data}`);
        // console.log(`assigned data: ${json_data}`);
      });
    // console.log(`data: ${data}`);
    for (var i in json_data) {
      console.log(`${i}`);
      data.push(json_data[i]);
    }
    console.log('Json data: ' + json_data);
    console.log('Array from data: ' + data);
    return (
      <div className="row" style={rowStyle}>
        <div className={classNames(styles.SimpleMapPage, 'col-lg-12')}>
          <GoogleMap
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
            <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
            {data.map(entity => (
              <MyGreatPlace
                lat={entity.location.latitude}
                lng={entity.location.latitude}
                text={entity.name}
              />
            ))}
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
