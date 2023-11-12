import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterSliceState {
  id: number;
  category: string;
}

const initialState: FilterSliceState = {
  id: NaN,
  category: "",
};

const filterSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<FilterSliceState>) {
      if (state.id === action.payload.id) {
        state.category = "";
        state.id = NaN;
      } else {
        state.category = action.payload.category;
        state.id = action.payload.id;
      }
    },
  },
});

export const { setCategory } = filterSlice.actions;

export default filterSlice.reducer;
