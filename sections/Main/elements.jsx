import styled from "styled-components";
import {
  StyledSectionHeading,
  StyledSectionSubheading,
} from "../../components/Typography/elements";

export const StyledMainBackground = styled.div`
  padding-top: 5rem;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  width: 100%;

  @media (max-width: 1024px) {
    background-position: top;
  }
`;

export const StyledMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 5rem;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-bottom: 30px;
  }
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
  max-width: 340px;
  max-height: 542px;
  width: 100%;
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
