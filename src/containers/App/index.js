import React, { PropTypes } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import classNames from 'classnames';
import SearchBar from './SearchBar';

import '../../theme/normalize.css';
import styles from './styles.scss';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div className={classNames(styles.App, 'container')}>
      <SearchBar />
    </div>
  </MuiThemeProvider>
);

App.propTypes = { children: PropTypes.node };

export default App;
