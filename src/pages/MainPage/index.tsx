import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

import { ListCharacters } from "../../components/AllListCharacters";
import { Pagination } from "../../components/Pagination";
import { Loader } from "../../components/Loader";
import { ContentNotFound } from "../../components/ContentNotFound";
import { Header } from "../../components/Header";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { getCharacters } from "../../store/slice/thunk";

import { useLoader } from "../../hooks/useLoader";
import { getCharactersParams } from "../../types/types";

import * as S from "./styled";

export const MainPage = () => {
  const { isLoading, startLoading, endLoading } = useLoader();

  const dispatch = useAppDispatch();

  const pages = useAppSelector((state) => state.charactersSlice.pages);
  const contentNotFound = useAppSelector(
    (state) => state.charactersSlice.contentNotFound
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");

  const handlerChange = debounce((e: any) => {
    setCurrentPage(1);
    setName(e.target.value);
  }, 500);

  const loadData = useCallback(
    (params: getCharactersParams) => {
      dispatch(getCharacters(params));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [name, currentPage]
  );

  useEffect(() => {
    startLoading();
    loadData({
      page: currentPage,
      name,
      endLoading,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, currentPage]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <S.WrapperLoader>
          <Loader />
        </S.WrapperLoader>
      );
    } else {
      return (
        <S.Wrapper>
          <ListCharacters />
          {pages > 1 ? (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : null}
        </S.Wrapper>
      );
    }
  };

  return (
    <S.Container>
      <Header isInfoPage={false} />
      <S.HeaderWrapper>
        <S.Input placeholder="FILTER BY NAME" onChange={handlerChange} />
        <S.CurrentPage>page: {currentPage}</S.CurrentPage>
      </S.HeaderWrapper>
      {contentNotFound ? <ContentNotFound /> : renderContent()}
    </S.Container>
  );
};
