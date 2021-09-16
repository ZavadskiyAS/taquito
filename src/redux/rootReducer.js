
import { combineReducers } from "redux";
import loaderSlice from './pkhs/transaction/slice';

const rootReducer = combineReducers({
    [loaderSlice.name]: loaderSlice.reducer,
});

export default rootReducer;