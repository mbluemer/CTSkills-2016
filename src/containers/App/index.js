import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import classNames from 'classnames';
import Modal from 'react-modal';
import axios from 'axios';
import SearchBar from './SearchBar';
import SimpleMapPage from '../SimpleMapPage';

import '../../theme/normalize.css';
import styles from './styles.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  testAPI() {
    console.log('MAKING API REQUEST TO: ttps://data.ct.gov/resource/w3da-nijq.json');
    axios.get('https://data.ct.gov/resource/w3da-nijq.json')
    .then(response => console.log(response));
    this.state = this.state;
  }

  render() {
    this.testAPI();
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className={classNames(styles.App, 'container')}>
            <SearchBar onSearch={() => this.openModal()} />
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={() => this.closeModal()}
              contentLabel="Example Modal"
            >
              <h1>Modal Content</h1>
              <p>Etc.</p>
            </Modal>
          </div>
        </MuiThemeProvider>
        <SimpleMapPage />
      </div>
    );
  }
}
