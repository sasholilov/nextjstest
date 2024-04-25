import Image from "next/image";
import { MainContainer } from "../../components/Containers/MainContainer";
import {
  StyledCardsContainer,
  StyledHeadingMain,
  StyledMainBackground,
  StyledMainImageContainer,
  StyledSubheadingMain,
} from "./elements";
import { Card } from "../../collections/Card/Card";

export const Main = ({ title, subtitle, image }) => {
  return (
    <>
      <MainContainer>
        <StyledHeadingMain>{title}</StyledHeadingMain>
        <StyledSubheadingMain>{subtitle}</StyledSubheadingMain>
        <StyledMainBackground>
          <StyledMainImageContainer>
            <Image
              layout="responsive"
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </StyledMainImageContainer>
          <StyledCardsContainer>
            <Card>First Card</Card>
            <Card>Second Card</Card>
            <Card>Third Card</Card>
          </StyledCardsContainer>
        </StyledMainBackground>
      </MainContainer>
    </>
  );
};
