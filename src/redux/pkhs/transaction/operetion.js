import balancSlice from "./slice";
import { TezosToolkit } from '@taquito/taquito';

const getBalanc = (id) => (dispatch) => {

const Tezos = new TezosToolkit('https://mainnet-node.madfish.solutions');
    Tezos.tz
    .getBalance(id)
    .then((balanc) => dispatch(balancSlice.actions.getBalanc({id : id, balanc : balanc.toNumber() / 1000000})))
    .catch((error) => dispatch(balancSlice.actions.getBalanc(error)));
};
export default getBalanc;




