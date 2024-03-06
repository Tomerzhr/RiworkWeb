import { FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const { isDark } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const handelSearch = ({ target }) => {
    setSearchParams({ q: target.value });
  };

  //Css Style Section

  const BoxStyle = {
    backgroundColor: isDark ? "0b1b27" : "#ecf1f9",
    placeholder: isDark ? "black" : "black",
    borderRadius: 2,
  };

  //End of Css Style Section

  return (
    <Box display="inline-flex">
      <FormControl variant="standard">
        <OutlinedInput
          sx={{ ...BoxStyle, width: { xs: "40vw", md: "15vw" } }}
          placeholder="search"
          size="small"
          name="search"
          value={searchParams.get("q") ?? ""}
          onChange={handelSearch}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }></OutlinedInput>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
