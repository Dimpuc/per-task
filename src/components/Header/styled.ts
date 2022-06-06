import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fontFamily } from "../../static/theme/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Logo = styled.img`
  width: 600px;
`;

export const BackWrapperButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  color: ${colors.mainLightGreen};
  padding: 20px;
`;

export const BackButton = styled(Link)`
  border: none;
  background-color: inherit;
  font-size: 18px;
  cursor: pointer;
  font-family: ${fontFamily}, sans-serif;
  text-decoration: none;
  color: ${colors.mainLightGreen};
`;
