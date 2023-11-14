import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterSliceState {
  categoryId: number;
  category: string;
}

const initialState: FilterSliceState = {
  categoryId: NaN,
  category: "",
};

const filterSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<FilterSliceState>) {
      if (state.categoryId === action.payload.categoryId) {
        state.category = "";
        state.categoryId = NaN;
      } else {
        state.category = action.payload.category;
        state.categoryId = action.payload.categoryId;
      }
    },
  },
});

export const { setCategory } = filterSlice.actions;

export default filterSlice.reducer;
