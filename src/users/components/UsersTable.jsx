import { Box, Table, TableBody, TableHead } from "@mui/material";
import { TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";
import GlobalButton from "../../components/GlobalButton";

import { useState } from "react";
import UserDeleteDialog from "./UserDeleteDialog";

function UsersTable({ users, onDeleteUser }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handelDialog = (term) => {
    if (term === "open") setDialogOpen(true);
    else setDialogOpen(false);
  };

  const handelDelete = () => {
    onDeleteUser(userToDelete);
    handelDialog("close");
  };

  //Css style section

  const boxStyle = {
    padding: "30px",
    overflow: "scroll",

    "& .MuiTableCell-root": {
      fontFamily: "inherit",
    },
  };

  const tableStyle = {
    "& .MuiTableCell-root": {
      fontWeight: "600",
    },
  };

  //End of css style section

  return (
    <>
      <Box sx={boxStyle}>
        <Table size="small">
          <TableHead>
            <TableRow sx={tableStyle}>
              <TableCell></TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell align="center">Admin</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: "600" }}>{index + 1}</TableCell>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name.first}</TableCell>
                  <TableCell>{user.name.last}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.createdAt}</TableCell>
                  <TableCell align="center">{user.isAdmin ? "Yes" : "No"}</TableCell>
                  <TableCell align="center">
                    <GlobalButton node="Edit" onClick={() => console.log("Edit Clicked")} />
                    <GlobalButton
                      node="Delete"
                      onClick={() => {
                        handelDialog("open"), setUserToDelete(user._id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
      <UserDeleteDialog isDialogOpen={isDialogOpen} onDeleteUser={handelDelete} onChangeDialog={() => handelDialog("close")} />
    </>
  );
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default UsersTable;
