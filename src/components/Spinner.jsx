import { number, oneOfType, string } from "prop-types";
import { Box, CircularProgress } from "@mui/material";

const Spinner = ({ size, height }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: { height },
      }}>
      <CircularProgress size={size} sx={{ alignSelf: "center" }} />
    </Box>
  );
};

Spinner.propTypes = {
  size: number,
  height: oneOfType([string, number]),
};

Spinner.defaultProps = {
  size: 40,
  height: "50vh",
};

export default Spinner;
