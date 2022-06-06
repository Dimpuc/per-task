import styled from "styled-components";

import { Link } from "react-router-dom";

import { colors, fontFamily } from "../../static/theme/theme";

export const Container = styled(Link)`
  display: flex;
  border: 3px solid ${colors.mainLightGreen};
  border-radius: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  height: 50px;
  cursor: pointer;
  font-family: ${fontFamily}, sans-serif;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  color: white;
  text-decoration: none;
  :hover {
    height: 65px;
  }
`;

export const Text = styled.h4`
  padding: 0px 40px 0px 40px;
`;
