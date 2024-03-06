import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import { useState } from "react";
import MenuBar from "./MenuBar";
import MoreButton from "./MoreButton";
import { useUser } from "../../../../users/providers/UserProviders";

const RightNavBar = () => {
  const { user } = useUser();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = !!anchorEl;
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}>
        <SearchBar />
        {!user && <NotLogged />}
        {user && <Logged handleClick={handleClick} />}
      </Box>
      <MenuBar anchorEl={anchorEl} handleClose={handleClose} open={isOpen} />
      <MoreButton handleClick={handleClick} />
    </>
  );
};

export default RightNavBar;
