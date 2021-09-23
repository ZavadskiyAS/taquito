import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from './PkhList.module.css';
import PkhItem from '../pkhItem/PkhItem';


const PkhList = () => {
const dataList = useSelector(({balanc})=> balanc.items)
console.log('dataList :>> ', dataList);

  return (

    <ul>
      {dataList &&
        dataList.map(pkh => (
            <PkhItem
              pkh={pkh}
              // onRemovePkh={() => onRemovePkh(pkh.id)}
            />

        ))}
    </ul>
  );
};

export default PkhList;
