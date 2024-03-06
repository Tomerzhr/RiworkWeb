import { Typography } from "@mui/material";
import { useTheme } from "../../../providers/ThemeProvider";

const EmptyCard = () => {
  const { isDark } = useTheme();
  return (
    <Typography variant="p" sx={{ color: isDark ? "white" : "black" }}>
      No card available at this moment
    </Typography>
  );
};

export default EmptyCard;
