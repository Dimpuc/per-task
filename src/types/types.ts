export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  episode: [string];
  image: string;
  location: {
    name: string;
    url: string;
  };
  type: string;
  url: string;
  created: string;
}

export interface getCharactersParams {
  page: number;
  name: string;
  endLoading?: () => void;
}

export interface CharacterSlice {
  characters: CharacterType[];
  pages: number;
  contentNotFound: boolean;
}
