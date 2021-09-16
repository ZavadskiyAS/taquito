import React, { useState} from 'react';
import { connect, useDispatch, } from 'react-redux';
import pkhsActions from '../../redux/pkhs/pkhsActions';
import styles from './PkhForm.module.css';
import balancOperetion from '../../redux/pkhs/transaction/operetion';
// import { TezosToolkit } from '@taquito/taquito';

const PkhForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = e => {
    const { value } = e.target;
    setInputValue(value) 
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(balancOperetion.getBalanc(inputValue))

    // const Tezos = new TezosToolkit('https://mainnet-node.madfish.solutions');
    // Tezos.tz
    // .getBalance(this.state.name)
    // .then((balance) => console.log(balance.toNumber() / 1000000))
    // .catch((error) => console.log(JSON.stringify(error)));

  };

 
    // const { name } = this.state;
    return (
      <form className={styles.pkhForm} onSubmit={handleSubmit}>
        <label>
          <br />
          <input
            style={{ borderRadius: 4 }}
            name="name"
            type="text"
            value={inputValue}
            onChange={changeHandler}
          />
        </label>
        <br />
        <br />
        <button style={{ borderRadius: 4, padding: 4 }} type="submit">
          Add pkh
        </button>
      </form>
    );

}

export default connect(null, {
  onSubmit: pkhsActions.addPkh,
})(PkhForm);
