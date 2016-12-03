import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import styles from './styles.scss';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div className={styles.MyGreatPlace}>
        {this.props.text}
      </div>
    );
  }
}
