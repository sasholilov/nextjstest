import styled from "styled-components";
import {
  StyledSectionHeading,
  StyledSectionParagraph,
} from "../../components/Typography/elements";

export const StyledCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #f1f1f1;
  max-width: ${(props) =>
    props.type === "mincard"
      ? `330px`
      : props.type === "midcard"
      ? `370px`
      : props.type === "largecard"
      ? `400px`
      : `340px`};
  padding: 1rem 2.5rem 1rem 2.5rem;
  border-radius: 6px;
  border: 2px solid transparent;
  cursor: pointer;
  & :hover {
    border: 2px solid #0772fc;
  }
`;

export const StyledCardIconWrapper = styled.div`
  width: 100px;
  height: auto;
`;

export const StyledCardText = styled.div`
  box-sizing: border-box;
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
