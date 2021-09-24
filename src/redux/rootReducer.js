
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// SLICES
import loaderSlice from './pkhs/transaction/slice';
import sessionSlice from "./session/sessionSlice";

// PERSIST CONFIG

const persistConfig = {
    key: "session",
    storage,
    // whitelist: ["token", "user", "isAuthenticated"],
  };
const rootReducer = combineReducers({
    [sessionSlice.name]: persistReducer(persistConfig, sessionSlice.reducer),
    [loaderSlice.name]: loaderSlice.reducer,
});

export default rootReducer;