import { Box } from "@mui/material";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <Box className="Layout" sx={{ minHeight: "100vh" }}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
