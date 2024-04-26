import Image from "next/image";
import { MainContainer } from "../../components/Containers/MainContainer";
import {
  StyledCardsContainer,
  StyledHeadingMain,
  StyledMainBackground,
  StyledMainContainer,
  StyledMainImageContainer,
  StyledSubheadingMain,
} from "./elements";
import { Card } from "../../collections/Card/Card";

export const Main = ({ title, subtitle, image, cards }) => {
  return (
    <>
      <MainContainer>
        <StyledHeadingMain>{title}</StyledHeadingMain>
        <StyledSubheadingMain>{subtitle}</StyledSubheadingMain>
        <StyledMainBackground>
          <StyledMainContainer>
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
              <Card title={cards.firstCard.title} size={cards.firstCard.size}>
                Complete <strong>brief writing or simple gaidanca</strong> on
                what to include, we've got you covered.
              </Card>
              <Card title={cards.secondCard.title} size={cards.secondCard.size}>
                In-depth agency search covering;{" "}
                <strong>criteria matching</strong>, door knocking and
                due-delligence vetting.
              </Card>
              <Card title={cards.thirdCard.title} size={cards.thirdCard.size}>
                Comprehensive <strong>pitch management</strong>, including
                comms, diary management and pitch hosting.
              </Card>
            </StyledCardsContainer>
          </StyledMainContainer>
        </StyledMainBackground>
      </MainContainer>
    </>
  );
};
