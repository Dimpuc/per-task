import styled from "styled-components";
import { colors, fontFamily } from "../../static/theme/theme";

export const Container = styled.div`
  font-family: ${fontFamily}, sans-serif;
  box-shadow: 0px 0px 11px 7px rgba(166, 212, 0, 0.99);
  padding: 30px;
`;

export const InfoContentBlock = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  height: 300px;
  width: 300px;
`;

export const Image = styled.img`
  border-radius: 3px;
  border: 3px solid ${colors.mainLightGreen};
`;

export const InfoWrapper = styled.div`
  border-radius: 10px;
  flex: 1;
`;

export const Title = styled.h3<{
  marginTop?: number;
}>`
  font-size: 35px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  margin-top: ${(props) => props.marginTop}px;
`;

export const Text = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  text-transform: uppercase;
`;

export const EpisodeBlock = styled.div``;
