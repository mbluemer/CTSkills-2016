import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import styles from './styles.scss';

export default class SearchBar extends React.Component {

  search(event) {
    console.log(event.key);
    if (event.key === 'Enter') {
      this.props.onSearch();
    }
  }

  render() {
    return (
      <Paper className={styles.Search} zDepth={2} rounded={false}>
        <div className={styles.SearchField}>
          <TextField hintText="Search..." fullWidth onKeyDown={e => this.search(e)} />
        </div>
      </Paper>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
