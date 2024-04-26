import Image from "next/image";
import { StyledCardIconWrapper } from "./elements";

export const CardIcon = ({ title }) => {
  return (
    <StyledCardIconWrapper>
      <Image
        layout="responsive"
        src={`/img/${title.toLowerCase()}icon.png`}
        width="100px"
        height="100px"
        alt={`${title}-icon`}
      ></Image>
    </StyledCardIconWrapper>
  );
};
