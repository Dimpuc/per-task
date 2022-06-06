import styled from "styled-components";
import { colors, fontFamily } from "../../static/theme/theme";

export const Container = styled.div`
  width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${fontFamily}, sans-serif;
`;

export const CurrentPage = styled.div`
  text-align: right;
  color: ${colors.mainLightGreen};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: 3px solid ${colors.mainLightGreen};
  border-radius: 10px;
  width: 150px;
  background-color: inherit;
  color: ${colors.white};
  padding: 7px;
  font-size: 15px;
  font-family: ${fontFamily}, sans-serif;
  cursor: pointer;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${colors.mainLightGreen};
    text-align: center;
  }
`;

export const WrapperLoader = styled.div`
  margin-top: 50px;
`;
