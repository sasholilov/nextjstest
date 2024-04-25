import styled from "styled-components";
import {
  StyledSectionHeading,
  StyledSectionSubheading,
} from "../../components/Typography/elements";

export const StyledMainBackground = styled.div`
  padding-top: 5rem;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 67%;
  height: 67%;
  display: flex;
  justify-content: center;
  gap: 6.5rem;
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

export const StyledMainImageContainer = styled.div`
  max-width: 420px;
  max-height: 670px;
  width: 100%;
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
