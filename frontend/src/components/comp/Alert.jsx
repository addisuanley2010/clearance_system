import React,{useContext} from "react";
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  Stack,
} from "@mui/material";
import { parentContext } from "../../state/ContextState";

const Alert = () => {
    const handleClose=()=>{
        alertContext.setDialogValue(false)
    }
    const alertContext=useContext(parentContext)
  return (
    <Stack >
      <Dialog open={alertContext.dialogValue.open||false} onClose={handleClose}  sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "500px",  // Set your width here
        },
     
    }} >
        <DialogTitle >Notice!</DialogTitle>
        <DialogContent>
          <DialogContentText>{alertContext.dialogValue.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ok</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default Alert;
