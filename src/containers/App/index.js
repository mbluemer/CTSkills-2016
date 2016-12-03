import React from 'react';
import LeafletMap from '../LeafletMap';

import '../../theme/normalize.css';
import styles from './styles.scss';

const App = () => (
  <div className={styles.App}>
    <LeafletMap />
  </div>
);


export default App;
