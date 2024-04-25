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

export const Main = ({ title, subtitle, image }) => {
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
              <Card title="Brief" type="mincard">
                Complete brief writing or simple gaidanca on what to include,
                we've got you covered.
              </Card>
              <Card title="Search" type="midcard">
                In-depth agency search covering; criteria matching, door
                knocking and due-delligence vetting.
              </Card>
              <Card title="Pitch" type="largecard">
                Comprehensive pitch management, including comms, diary
                management and pitch hosting
              </Card>
            </StyledCardsContainer>
          </StyledMainContainer>
        </StyledMainBackground>
      </MainContainer>
    </>
  );
};
