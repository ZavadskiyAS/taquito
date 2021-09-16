import React from 'react';
import { connect } from 'react-redux';
import styles from './App.module.css';
import PkhForm from './pkhForm/PkhForm';
import Filter from './filter/Filter';
import PkhList from './pkhList/PkhList';


const App = ({ pkhs }) => {
  return (
    <div>

      <PkhForm />
      {pkhs && pkhs.length > 1 && <Filter />}
      <h2 className={styles.sectionTitle}>Pkhs</h2>
      <PkhList />
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     pkhs: state.pkhs.items,
//   };
// };


// export default connect(mapStateToProps)(App);
export default App;
