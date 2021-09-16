import React from 'react';
import styles from './PkhItem.module.css';
import PropTypes from 'prop-types';

const PkhItem = ({ pkh: { id, name, balans }, onRemovePkh }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.listItemP}>
        {name}: {balans}
      </p>
      <button
        className={styles.listItemButton}
        onClick={() => onRemovePkh(id)}
        type="button"
      >
        X
      </button>
    </li>
  );
};

PkhItem.propTypes = {
  pkhs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  onRemovePkh: PropTypes.func.isRequired,
};

export default PkhItem;
