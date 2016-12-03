import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';


export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const styling = {
      position: 'absolute',
      width: 10,
      height: 10,
      color: 'blue',
      background: '#f44336',
      border: '5px solid #f44336',
      'border-radius': 40,
      'text-align': 'center',
      'font-size': 12,
      left: -40 / 2,
      top: -40 / 2,
    };
    return (
      <button style={styling} onClick={() => this.props.onClick()}>
        {this.props.text}
      </button>
    );
  }
}
