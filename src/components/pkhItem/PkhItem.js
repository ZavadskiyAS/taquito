import React from 'react';
import { useDispatch } from 'react-redux';
import balansSlice from '../../redux/pkhs/transaction/slice';
import styles from './PkhItem.module.css';


const PkhItem = ({ pkh }) => {
  const dispatch = useDispatch()
  const onRemovePkh = ()=> dispatch(balansSlice.actions.remove(pkh.id))
  return (
    <li className={styles.listItem}>
      <p className={styles.listItemP}>
        {/* {name}: {balans} */}
        {pkh.balanc}
      </p>
      <p className={styles.listItemP}>
        {/* {name}: {balans} */}
        {pkh.id}
      </p>
      <button
        className={styles.listItemButton}
        onClick={onRemovePkh}
        type="button"
      >
        X
      </button>
    </li>
  );
};

export default PkhItem;
