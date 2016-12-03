import React, { PropTypes } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import classNames from 'classnames';

import '../../theme/normalize.css';
import styles from './styles.scss';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div className={classNames(styles.App, 'container')}>
      <Paper className={styles.Search} zDepth={2} rounded={false}>
        <div className={styles.SearchField}>
          <TextField hintText="Full width" fullWidth />
        </div>
      </Paper>
    </div>
  </MuiThemeProvider>
);

App.propTypes = { children: PropTypes.node };

export default App;
