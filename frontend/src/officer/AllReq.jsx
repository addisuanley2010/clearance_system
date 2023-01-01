import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper, Button, Select, MenuItem } from "@mui/material/";
import { blue, grey } from "@mui/material/colors";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { parentContext } from "../state/ContextState";
const AllReq = () => {
  const [tempId, setTempId] = useState("");
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState("");
  const [users, setUsers] = useState([]);
  const AllReqContext = useContext(parentContext);
  const deptid = AllReqContext.deptid;
  useEffect(() => {
    axios
      .get('http://localhost:3002/employees/allReq/', {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [deptid]);

  const background = {
    backgroundColor: grey[400],
  };

  const handleClickOpen = (empid) => {
    setTempId(empid);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const data = {
      newStatus: values,
      empid: tempId,
    };
    axios
      .put("http://localhost:3002/employees/signature", data, {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res.data.success);
      });
    console.log(data);

    setOpen(false);
    alert(values);
  };

  const status = [
    { id: 1, name: "Approved" },
    { id: 2, name: "Hang On" },
    { id: 3, name: "Pending" },
  ];
  const option = status.map((data) => {
    return (
      <MenuItem value={data.name} key={data.id}>
        {data.name}
      </MenuItem>
    );
  });
  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: "65%", minHeight: "60%", marginBottom: "0px" }}
    >
      <Table
        stickyHeader
        sx={{
          minWidth: 650,
          maxWidth: "90%",
          marginTop: "30px",
          marginX: "4rem",
          border: 1,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow sx={background}>
            <TableCell>No</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="center">phone</TableCell>
            <TableCell align="center">designation</TableCell>
            <TableCell align="center">campus</TableCell>
            <TableCell align="center">status</TableCell>
            <TableCell align="center">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, id) => (
            <TableRow
              key={user.empid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {id + 1}
              </TableCell>
              <TableCell align="center">{user.empid} </TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.phone}</TableCell>
              <TableCell align="center">{user.designation}</TableCell>
              <TableCell align="center">{user.campus}</TableCell>
              <TableCell align="center">pending</TableCell>
              <TableCell align="center">
                <Button
                  sx={{ background: grey[100] }}
                  onClick={() => handleClickOpen(user.empid)}
                >
                  change status
                </Button>
                <Button
                  sx={{ background: blue[600],
                  color:grey[900]
                  }}
                  // onClick={() => handleClickOpen(user.empid)}
                >
                  view detail
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Please Update Employee Status</DialogTitle>
                  <DialogContent>
                    <Select
                      value={values}
                      onChange={(e) => {
                        setValues(e.target.value);
                      }}
                      sx={{
                        width: "100%",
                      }}
                    >
                      {option}
                    </Select>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>update</Button>
                  </DialogActions>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default AllReq;
