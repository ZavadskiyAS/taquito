import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from './PkhList.module.css';
import PkhItem from '../pkhItem/PkhItem';


const PkhList = () => {

  const dispatch = useDispatch();

  return (

    <ul>
      {/* {pkhs &&
        pkhs.map(pkh => (
            <PkhItem
              pkh={pkh}
              onRemovePkh={() => onRemovePkh(pkh.id)}
            />

        ))} */}
    </ul>
  );
};

export default PkhList;
