import React from 'react';
import styles from './PkhItem.module.css';

const PkhItem = ({ id, balans }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.listItemP}>
        {/* {name}: {balans} */}
        {balans}
      </p>
      <button
        className={styles.listItemButton}
        // onClick={() => onRemovePkh(id)}
        type="button"
      >
        X
      </button>
    </li>
  );
};

export default PkhItem;
