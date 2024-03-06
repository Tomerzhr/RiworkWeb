import { styled } from "@mui/material/styles";


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
  
  return <Image src="../../../../../../assets/images/MainPhoto.png" alt="main photo" width="100%" />;
};

export default RightSection;
