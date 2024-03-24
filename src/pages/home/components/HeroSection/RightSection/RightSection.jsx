import { styled } from "@mui/material/styles";
import HeroPhoto from "../../../../../../assets/images/MainPhoto.png";

const RightSection = () => {
  //Css Style Section

  const Image = styled("img")(({ theme }) => ({
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
  }));

  //End of Css Style Section

  return <Image src={HeroPhoto} alt="heros photo" width="100%" />;
};

export default RightSection;
