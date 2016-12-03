import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import classNames from 'classnames';
import Modal from 'react-modal';
import axios from 'axios';
import JsonTable from 'react-json-table';
import SearchBar from './SearchBar';
import SimpleMapPage from '../SimpleMapPage';
import '../../theme/normalize.css';
import styles from './styles.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, info: '', location: '' };
  }

  openModal(text) {
    const data = text;
    this.setState({ modalIsOpen: true, info: data, location: text.location_1 });
    delete data.location_1;
  }

  closeModal() {
    this.setState({ modalIsOpen: false, info: '', location: '' });
  }

  testAPI() {
    console.log('MAKING API REQUEST TO: ttps://data.ct.gov/resource/w3da-nijq.json');
    axios.get('https://data.ct.gov/resource/w3da-nijq.json')
    .then(response => console.log(response));
    this.state = this.state;
  }

  display(entity) {
    this.openModal(entity);
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
              <h1>Education Information for {this.state.info.name}</h1>
              <JsonTable rows={[this.state.info]} />
              <JsonTable rows={[this.state.location]} />
            </Modal>
            <SimpleMapPage display={entity => this.display(entity)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
