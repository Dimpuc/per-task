import styled from "styled-components";
import { colors } from "../../static/theme/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`;

export const NumberBlock = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
  background-color: ${colors.mainLightGreen};
  align-items: center;
  border: none;
  color: ${colors.darkBlue};
  margin-right: 5px;
  margin-left: 5px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.mainLightGreen};
  cursor: pointer;
`;
