import PhotoLogo from "../../../../../../assets/images/Logo_illustrstion.png";
import { styled } from "@mui/material/styles";

const RightSide = () => {
  //Css Style Section

  const ImageStyle = styled("img")(({ theme }) => ({
    animation: "myAnim 7s ease 0s infinite normal forwards",
    [theme.breakpoints.down("xs")]: {
      width: "0%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
    [theme.breakpoints.up("md")]: {
      width: "20%",
    },

    "@keyframes myAnim": {
      "0%": {
        transform: "scale(1)",
      },

      "40%": {
        transform: "scale(1.08)",
      },

      "100%": {
        transform: "scale(1)",
      },
    },
  }));

  //End of Css Style Section

  return <ImageStyle src={PhotoLogo} alt="Logo Image illustration " width="70%" />;
};

export default RightSide;
