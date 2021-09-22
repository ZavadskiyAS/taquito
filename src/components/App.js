import React from 'react';
import styles from './App.module.css';
import PkhForm from './pkhForm/PkhForm';
import PkhList from './pkhList/PkhList';


const App = () => {
  return (
    <div>
      <PkhForm />
      <h2 className={styles.sectionTitle}>Pkhs</h2>
      <PkhList />
    </div>
  );
};

export default App;
