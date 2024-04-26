import { CardIcon } from "../../components/CardIcon";
import {
  StyledCardContainer,
  StyledCardDescription,
  StyledCardHeading,
  StyledCardText,
} from "./elements";

export const Card = ({ children, title, size }) => {
  return (
    <StyledCardContainer size={size}>
      <CardIcon title={title} />
      <StyledCardText>
        <StyledCardHeading>{title}</StyledCardHeading>
        <StyledCardDescription>{children}</StyledCardDescription>
      </StyledCardText>
    </StyledCardContainer>
  );
};
