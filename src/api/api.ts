import axios from "axios";
import { getCharactersParams } from "../types/types";

export const getCharacter = (params: getCharactersParams) => {
  return axios.get(`https://rickandmortyapi.com/api/character`, { params });
};
