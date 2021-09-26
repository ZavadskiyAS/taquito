import React from 'react';
import { useSelector } from "react-redux";
import styles from './PkhList.module.css';
import PkhItem from '../pkhItem/PkhItem';
import { v4 as uuid } from 'uuid';


const PkhList = () => {
const dataList = useSelector(({balans})=> balans.items)

  return (
    <ul className={styles.list}>
      {dataList &&
        dataList.map(pkh => (
            <PkhItem key={uuid()}
              pkh={pkh}
            />

        ))}
    </ul>
  );
};

export default PkhList;
