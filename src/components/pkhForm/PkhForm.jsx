import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './PkhForm.module.css';
import {getBalans} from '../../redux/pkhs/transaction/operetion';

const PkhForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = e => {
    const { value } = e.target;
    setInputValue(value) 
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getBalans(inputValue))
  };

    return (
      <>
        <div className={styles.pkhWrap}>
          <form className={styles.pkhForm} onSubmit={handleSubmit}>
              <input
                className={styles.pkhInput}
                type="text"
                placeholder=" "
                name="name"
                value={inputValue}
                onChange={changeHandler}
              />
    
            <button 
              className={styles.pkhBtn}
              type="submit">
              <strong>Add pkh</strong>
            </button>
          </form>
        </div>
      </>
    );
}

export default PkhForm;
