import { FC } from "react";
import { routerPath } from "../../router/routerPath";

import * as S from "./styled";

interface CharactertComponentProps {
  name: string;
  status: string;
  id: number;
}

export const CharactertComponent: FC<CharactertComponentProps> = ({
  name,
  status,
  id,
}) => {
  return (
    <S.Container to={routerPath.infoPage.replace(":id", id.toString())}>
      <S.Text>{name}</S.Text>
      <S.Text>{status}</S.Text>
    </S.Container>
  );
};
