import styled from "styled-components";
import {
  StyledSectionHeading,
  StyledSectionParagraph,
} from "../../components/Typography/elements";

export const StyledCardContainer = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  background-color: #f1f1f1;
  max-width: ${(props) =>
    props.type === "mincard"
      ? `400px`
      : props.type === "midcard"
      ? `420px`
      : props.type === "largecard"
      ? `440px`
      : `400px`};
  padding: 1rem 2.5rem 1rem 2.5rem;
  border-radius: 6px;
  border: 2px solid transparent;

  & :hover {
    border: 2px solid #0772fc;
  }
`;

export const StyledCardHeading = styled(StyledSectionHeading)`
  font-size: 1.3em;
  line-height: 0;

  ${StyledCardContainer}:hover & {
    color: #0772fc;
    text-decoration: underline;
  }
`;

export const StyledCardDescription = styled(StyledSectionParagraph)``;
