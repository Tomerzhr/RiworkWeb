import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import GlobalButton from "../../components/GlobalButton";
import PropTypes from "prop-types";

const UserDeleteDialog = ({ isDialogOpen, onDeleteUser, onChangeDialog }) => {
  return (
    <Dialog open={isDialogOpen} onClose={onChangeDialog}>
      <DialogTitle>Are you sure you want to delete this user?</DialogTitle>
      <DialogContent> This action cannot be undone, and the user will be lost forever.</DialogContent>
      <DialogActions>
        <GlobalButton onClick={onChangeDialog} node="Cancel" />
        <GlobalButton onClick={onDeleteUser} background="black" node="Delete" />
      </DialogActions>
    </Dialog>
  );
};

UserDeleteDialog.propTypes = {
  isDialogOpen: PropTypes.bool.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  onChangeDialog: PropTypes.func.isRequired,
};

export default UserDeleteDialog;
