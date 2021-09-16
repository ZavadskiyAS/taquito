import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from 'redux';
// import pkhsReducer from './pkhs/pkhsReducer';
import thunk from "redux-thunk";
import rootReducer from './rootReducer';

// const rootReducer = combineReducers({
//   pkhs: pkhsReducer,
// });

 const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
