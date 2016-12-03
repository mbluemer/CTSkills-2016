import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import classNames from 'classnames';
import Modal from 'react-modal';
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

  render() {
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
            <SimpleMapPage />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
