import { FC } from "react";

import * as S from "./styled";

interface InfoPageContentType {
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
  created: string;
}

export const InfoPageContent: FC<InfoPageContentType> = ({
  name,
  status,
  species,
  gender,
  episode,
  location,
  image,
  created,
}) => {
  const transformCreated = created.slice(0, 10);
  return (
    <S.Container>
      <S.InfoContentBlock>
        <S.InfoWrapper>
          <S.Title>{name}</S.Title>
          <S.Text>Status: {status}</S.Text>
          <S.Text>Species: {species}</S.Text>
          <S.Text>Gender: {gender}</S.Text>
          <S.Text>Created: {transformCreated}</S.Text>
          <S.Text>Location: {location.name}</S.Text>
          <S.EpisodeBlock>
            <S.Title marginTop={100}>Episodes</S.Title>
            {episode && episode.map((episode) => <S.Text>{episode}</S.Text>)}
          </S.EpisodeBlock>
        </S.InfoWrapper>
        <S.ImageWrapper>
          <S.Image src={image} alt="image" />
        </S.ImageWrapper>
      </S.InfoContentBlock>
    </S.Container>
  );
};
