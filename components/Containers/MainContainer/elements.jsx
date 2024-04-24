import styled from "styled-components";
import {
  StyledSectionHeading,
  StyledSectionSubheading,
} from "../../Typography/elements";

export const StyledMainContainer = styled.div`
  padding-top: 20px;
  max-width: 1530px;
  height: 1000px;
  margin: 0 auto;
`;

export const StyledMainBackground = styled.div`
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const StyledHeadingMain = styled(StyledSectionHeading)`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const StyledSubheadingMain = styled(StyledSectionSubheading)`
  text-align: center;
  margin: 0;
  padding: 0;
`;
