import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  error: null,
};

const balansSlice = createSlice({
  name: "balans",
  initialState,
  reducers: {
    getBalans: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
    getBalansError: (state, { payload }) => ({
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