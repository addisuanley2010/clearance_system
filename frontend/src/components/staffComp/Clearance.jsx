import { Button, Card, Stack } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useState } from "react";
import { parentContext } from "../../state/ContextState";
import axios from "axios";

const Clearance = () => {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");

  const clearanceContext = useContext(parentContext);

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fillForm = () => {
    setOpen(true);
  };

  const handleSend = () => {
    const data = {
      reason: reason,
      date: date,
      empid: clearanceContext.name,
    };
    setOpen(false);
    axios.post("http://localhost:3002/clearanceReq", data).then((res) => {
      console.log(res.data);
      alert(res.data);
    });
  };

  return (
    <Card
      justifyContent={"center"}
      sx={{
        mt: "40px",
        // ml: "450px",
      }}
    >
      <Stack
        style={{ display: clearanceContext.present ? "block" : "none" }}
      >
        <div> wait to approved!</div>
      </Stack>
      <Button
        style={{ display: clearanceContext.present ? "none" : "block" }}
        onClick={fillForm}
        variant="contained"
        sx={{
          width: "50vh",
        }}
      >
        start your clearance by click here
      </Button>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Please Fill The Form Below</DialogTitle>
          <DialogContent>
            <TextField
              value={reason}
              onChange={(e) => handleReasonChange(e)}
              autoFocus
              margin="dense"
              id="name"
              label="Reason"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              value={date}
              onChange={(e) => handleDateChange(e)}
              autoFocus
              margin="dense"
              id="name"
              type="date"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSend}>Send</Button>
          </DialogActions>
        </Dialog>
      </div>{" "}
    </Card>
  );
};

export default Clearance;
