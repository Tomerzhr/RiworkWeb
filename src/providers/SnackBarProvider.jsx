/* eslint-disable react-refresh/only-export-components */
import React, { useCallback, useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { node } from "prop-types";
import { Alert } from "@mui/material";

const SnackbarContext = React.createContext(null);

export const SnackbarProvider = ({ children }) => {
  const [isSnackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("in snackbar");
  const [snackColor, setSnackColor] = useState("success");
  const [snackVariant, setSnackVariant] = useState("filled");

  const setSnack = useCallback((color, message, variant = "filled") => {
    setSnackOpen(true);
    setSnackColor(color);
    setSnackVariant(variant);
    setSnackMessage(message);
  }, []);

  const snackBarStyles = {
    width: "100%",
    borderRadius: "20px",
    backgroundColor: (() => {
      switch (snackColor) {
        case "error":
          return "#d84c4c";
        case "success":
          return "#00ffaa";
        default:
          return "";
      }
    })(),
    color: "black",
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={isSnackOpen}
        onClose={() => setSnackOpen((prev) => !prev)}
        autoHideDuration={5000}>
        <Alert severity={snackColor} variant={snackVariant} sx={snackBarStyles}>
          {snackMessage}
        </Alert>
      </Snackbar>

      <SnackbarContext.Provider value={setSnack}>{children}</SnackbarContext.Provider>
    </>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

SnackbarProvider.propTypes = {
  children: node.isRequired,
};
