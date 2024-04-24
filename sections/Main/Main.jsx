import { MainContainer } from "../../components/Containers/MainContainer";
import {
  StyledHeadingMain,
  StyledMainBackground,
  StyledSubheadingMain,
} from "./elements";

export const Main = () => {
  return (
    <>
      <MainContainer>
        <StyledHeadingMain>Managed agency selection</StyledHeadingMain>
        <StyledSubheadingMain>
          Strenghten your onboarding process
        </StyledSubheadingMain>
        <StyledMainBackground></StyledMainBackground>
      </MainContainer>
    </>
  );
};
