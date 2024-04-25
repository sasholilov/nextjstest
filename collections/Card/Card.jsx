import {
  StyledCardContainer,
  StyledCardDescription,
  StyledCardHeading,
} from "./elements";

export const Card = ({ children, title, type }) => {
  return (
    <StyledCardContainer type={type}>
      <StyledCardHeading>{title}</StyledCardHeading>
      <StyledCardDescription>{children}</StyledCardDescription>
    </StyledCardContainer>
  );
};
