import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './PkhForm.module.css';
import {getBalanc} from '../../redux/pkhs/transaction/operetion';

const PkhForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = e => {
    const { value } = e.target;
    setInputValue(value) 
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getBalanc(inputValue))

    // const Tezos = new TezosToolkit('https://mainnet-node.madfish.solutions');
    // Tezos.tz
    // .getBalance(this.state.name)
    // .then((balance) => console.log(balance.toNumber() / 1000000))
    // .catch((error) => console.log(JSON.stringify(error)));
  };


    return (
      <form className={styles.pkhForm} onSubmit={handleSubmit}>
        <label>
          <br />
          <input
            type="text"
            placeholder=" "
            name="name"
            value={inputValue}
            onChange={changeHandler}
          />
        </label>
        <br />
        <br />
        <button 
          type="submit">
          Add pkh
        </button>
      </form>
    );
}

export default PkhForm;
