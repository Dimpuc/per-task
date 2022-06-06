import { createSlice } from "@reduxjs/toolkit";
import { CharacterSlice } from "../../types/types";
import { getCharacters } from "./thunk";

const initialState: CharacterSlice = {
  characters: [],
  contentNotFound: false,
  pages: 1,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.characters = action.payload.results;
      state.pages = action.payload.info.pages;
      state.contentNotFound = false;
    });
    builder.addCase(getCharacters.rejected, (state) => {
      state.contentNotFound = true;
    });
  },
});

export default charactersSlice.reducer;
