import styled from "styled-components";
import {
  StyledSectionHeading,
  StyledSectionParagraph,
} from "../../components/Typography/elements";

export const StyledCardContainer = styled.div`
  background-color: #f1f1f1;
  max-width: ${(props) =>
    props.type === "mincard"
      ? `300px`
      : props.type === "midcard"
      ? `330px`
      : props.type === "largecard"
      ? `360px`
      : `300px`};
  padding: 1rem 2.5rem 1rem 2.5rem;
  border-radius: 6px;
`;

export const StyledCardHeading = styled(StyledSectionHeading)`
  font-size: 1.3em;
  line-height: 0;
`;

export const StyledCardDescription = styled(StyledSectionParagraph)``;
