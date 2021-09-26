import balansSlice from "./slice";
import { TezosToolkit } from '@taquito/taquito';

export const getBalans = (id) => (dispatch) => {

    const Tezos = new TezosToolkit('https://mainnet-node.madfish.solutions');
    Tezos.tz
    .getBalance(id)
    .then((balans) => dispatch(balansSlice.actions.getBalans({id : id, balans : balans.toNumber() / 1000000})))
    .catch((error) => dispatch(balansSlice.actions.getBalansError(error)));
};





