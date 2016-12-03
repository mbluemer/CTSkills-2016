import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import styles from './styles.scss';

const SearchBar = () => (
  <Paper className={styles.Search} zDepth={2} rounded={false}>
    <div className={styles.SearchField}>
      <TextField hintText="Search..." fullWidth />
    </div>
  </Paper>
);

export default SearchBar;
