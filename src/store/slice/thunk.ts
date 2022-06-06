import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacter } from "../../api/api";
import { getCharactersParams } from "../../types/types";

const GET_CHARACTERS = "/";

export const getCharacters = createAsyncThunk(
  GET_CHARACTERS,
  async (params: getCharactersParams) => {
    const data = { name: params.name, page: params.page };
    const response = await getCharacter(data);
    params.endLoading && params.endLoading();
    return response.data;
  }
);
