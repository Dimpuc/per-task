import { FC } from "react";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { useAppSelector } from "../../store/store";

import { paginationHelper } from "../../helper/paginationHelper";

import * as S from "./styled";

enum PAGINATION_TYPE {
  NEXT = "next",
  PREV = "prev",
  CURRENT = "current",
}

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const pages = useAppSelector((state) => state.charactersSlice.pages);

  const paginationData = paginationHelper(pages);

  const handlerPagination = (type: string, id?: number) => () => {
    window.scrollTo({ top: 0 });
    if (type === PAGINATION_TYPE.CURRENT) return setCurrentPage(id!);
    if (type === PAGINATION_TYPE.NEXT) return setCurrentPage(currentPage + 1);
    if (type === PAGINATION_TYPE.PREV) return setCurrentPage(currentPage - 1);
  };

  return (
    <S.Container>
      <S.IconWrapper>
        {currentPage > 1 ? (
          <ArrowLeftIcon
            fontSize="large"
            onClick={handlerPagination(PAGINATION_TYPE.PREV)}
          />
        ) : null}
      </S.IconWrapper>
      {paginationData &&
        paginationData.map((number) => (
          <S.NumberBlock
            key={number}
            onClick={handlerPagination(PAGINATION_TYPE.CURRENT, number)}
          >
            {number}
          </S.NumberBlock>
        ))}
      <S.IconWrapper>
        {currentPage !== pages ? (
          <ArrowRightIcon
            fontSize="large"
            onClick={handlerPagination(PAGINATION_TYPE.NEXT)}
          />
        ) : null}
      </S.IconWrapper>
    </S.Container>
  );
};
