// import { combineReducers } from 'redux';
// import actionTypes from './pkhsActionTypes';


// const balans = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD_BALANS:
//       return payload.balans;
//     default:
//       return state;
//   }
// }

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       if (
//         state 
//         &&
//         state.find(pkh => payload.pkh.name === pkh.name)
//       ) {
//         alert('User with this name is already exist');
//         console.log(state);;
//         return state
//       } else {
//         return [...state, payload.pkh];
//       }

//     case actionTypes.REMOVE:
//       return state.filter(pkh => pkh.id !== payload.id);
//     default:
//       return state;
//   }
// };


// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload.filter;
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
//   balans,
// });
