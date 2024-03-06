import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import GlobalButton from "../../components/GlobalButton";
import { memo } from "react";
import { useTheme } from "../../providers/ThemeProvider";

const Form = ({ onSubmit, onReset, onChange, children, to, title, style }) => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

    //Css Style Section 

  const titleStyle = {
    fontWeight: "600",
    marginBottom: "20px",
    color: isDark ? "white" : "black",
  };

  //End of Css Style Section

  return (
    <Box component="form" onSubmit={onSubmit} autoComplete="off" noValidate sx={style}>
      <h1 style={titleStyle}>{title.toUpperCase()}</h1>
      <Grid container spacing={2}>
        {children}
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={4} sm={2} md={2} lg={1.5}>
          <GlobalButton node="Submit" disabled={!!onChange()} onClick={onSubmit} />
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={1.5}>
          <GlobalButton node="Reset" component="div" onClick={onReset} />
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={1.5}>
          <GlobalButton node="Cancel" component="div" onClick={() => navigate(to)} />
        </Grid>
      </Grid>
    </Box>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
};

const MemoizedForm = memo(Form);
export default MemoizedForm;
