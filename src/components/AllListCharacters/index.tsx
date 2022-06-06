import { CharactertComponent } from "../CharactertListItem";

import { useAppSelector } from "../../store/store";
import { CharacterType } from "../../types/types";

import * as S from "./styled";

export const ListCharacters = () => {
  const characters = useAppSelector(
    (state) => state.charactersSlice.characters
  );

  return (
    <S.Container>
      <S.Wrapper>
        {characters &&
          characters.map((character: CharacterType) => (
            <CharactertComponent key={character.id} {...character} />
          ))}
      </S.Wrapper>
    </S.Container>
  );
};
