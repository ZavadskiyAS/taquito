import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  error: null,
};

const balansSlice = createSlice({
  name: "balanc",
  initialState,
  reducers: {
    getBalanc: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
    getBalancError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    remove: (state, { payload }) =>(
      {
        ...state,
        items: state.items.filter(({id}) => id !== payload)
      }
    )
  },
});

export default balansSlice;