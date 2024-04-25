import Image from "next/image";
import { MainContainer } from "../../components/Containers/MainContainer";
import {
  StyledHeadingMain,
  StyledMainBackground,
  StyledMainImageContainer,
  StyledSubheadingMain,
} from "./elements";

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
        </StyledMainBackground>
      </MainContainer>
    </>
  );
};
