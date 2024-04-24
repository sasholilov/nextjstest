import { MainContainer } from "../../components/Containers/MainContainer";
import {
  StyledMainBackground,
  StyledHeadingMain,
  StyledSubheadingMain,
} from "../../components/Containers/MainContainer/elements";

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
