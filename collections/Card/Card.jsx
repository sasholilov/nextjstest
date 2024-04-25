import {
  StyledCardContainer,
  StyledCardDescription,
  StyledCardHeading,
  StyledCardIconWrapper,
  StyledCardText,
} from "./elements";
import Image from "next/image";

export const Card = ({ children, title, type }) => {
  return (
    <StyledCardContainer type={type}>
      <StyledCardIconWrapper>
        <Image
          layout="responsive"
          src={`/img/${title.toLowerCase()}icon.png`}
          width="100px"
          height="100px"
          alt="brief"
        ></Image>
      </StyledCardIconWrapper>
      <StyledCardText>
        <StyledCardHeading>{title}</StyledCardHeading>
        <StyledCardDescription>{children}</StyledCardDescription>
      </StyledCardText>
    </StyledCardContainer>
  );
};
