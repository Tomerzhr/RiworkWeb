import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import PropTypes from "prop-types";
import GlobalButton from "../../../components/GlobalButton";

const CardDeleteDialog = ({ isDialogOpen, onDelete, onChangeDialog }) => {
  return (
    <Dialog open={isDialogOpen} onClose={onChangeDialog}>
      <DialogTitle>Are you sure you want to delete this card?</DialogTitle>
      <DialogContent> This action cannot be undone, and the card will be lost forever.</DialogContent>
      <DialogActions>
        <GlobalButton onClick={onChangeDialog} node="Cancel" />
        <GlobalButton onClick={onDelete} background="black" node="Delete" />
      </DialogActions>
    </Dialog>
  );
};

CardDeleteDialog.propTypes = {
  isDialogOpen: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangeDialog: PropTypes.func.isRequired,
};

export default CardDeleteDialog;
