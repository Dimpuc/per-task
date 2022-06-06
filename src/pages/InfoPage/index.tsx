import { useParams } from "react-router-dom";

import { ContentNotFound } from "../../components/ContentNotFound";
import { Header } from "../../components/Header";
import { InfoPageContent } from "../../components/InfoPageContent";

import { useAppSelector } from "../../store/store";

import * as S from "./styled";

export const InfoPage = () => {
  const characters = useAppSelector(
    (state) => state.charactersSlice.characters
  );
  const { id } = useParams<{ id: string }>();
  const currentCharacter = characters.find(
    (character) => character.id.toString() === id
  );

  return (
    <S.Container>
      <Header isInfoPage={true} />
      {currentCharacter ? (
        <InfoPageContent {...currentCharacter} />
      ) : (
        <ContentNotFound />
      )}
    </S.Container>
  );
};
