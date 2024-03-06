import { Grid, TextField } from "@mui/material";
import { makeFirstLatterUpperCase } from "../utils/algoMethod";
import PropTypes from "prop-types";
import { useTheme } from "../../providers/ThemeProvider";

const Input = ({ variant, type, name, data, label, required, error, handleChange, rows, style }) => {
  const { isDark } = useTheme();

  //Css Style Section

  const labelStyle = {
    margin: "5px 0",
    fontWeight: "500",
    color: isDark ? "white" : "black",
  };

  //End of Css Style Section

  return (
    <Grid item xs={12} sm={6}>
      <h4 style={labelStyle}>{makeFirstLatterUpperCase(label)}</h4>
      <TextField
        hiddenLabel
        variant={variant}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={handleChange}
        fullWidth
        autoComplete="on"
        rows={rows}
        sx={style}
      />
    </Grid>
  );
};

Input.defaultProps = {
  variant: "outlined",
  type: "text",
  required: true,
  rows: 1,
};
Input.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

export default Input;
