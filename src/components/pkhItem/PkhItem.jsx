import React from 'react';
import { useDispatch } from 'react-redux';
import balansSlice from '../../redux/pkhs/transaction/slice';
import styles from './PkhItem.module.css';


const PkhItem = ({ pkh }) => {
  const dispatch = useDispatch()
  const onRemovePkh = ()=> dispatch(balansSlice.actions.remove(pkh.id))
  return (
    <>
      <li className={styles.listItem}>
        <p className={styles.listItemId}>
          <strong>{pkh.id}</strong>
        </p>
        <p className={styles.listItemBalans}>
          <strong>{pkh.balans}</strong>
        </p>
        <button
          className={styles.listItemButton}
          onClick={onRemovePkh}
          type="button"
        >
          X
        </button>
      </li>
    </>
  );
};

export default PkhItem;
