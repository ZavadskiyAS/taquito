import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// SLICES
import loaderSlice from './pkhs/transaction/slice';


// PERSIST CONFIG
const persistConfig = {
    key: "session",
    storage,
    whitelist: ['balans'],
  };
const rootReducer = combineReducers({
    [loaderSlice.name]: persistReducer(persistConfig, loaderSlice.reducer),
    [loaderSlice.name]: loaderSlice.reducer,
});

export default persistReducer(persistConfig, rootReducer);