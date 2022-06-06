import { FC } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import logo from "../../static/images/logo2.png";
import { routerPath } from "../../router/routerPath";

import * as S from "./styled";

interface HeaderProps {
  isInfoPage?: boolean;
}

export const Header: FC<HeaderProps> = ({ isInfoPage }) => {
  return (
    <S.Container>
      {isInfoPage ? (
        <S.BackWrapperButton>
          <ArrowLeftIcon />
          <S.BackButton to={routerPath.mainPage}>BACK</S.BackButton>
        </S.BackWrapperButton>
      ) : null}
      <S.Logo src={logo} alt="logo" />
    </S.Container>
  );
};
