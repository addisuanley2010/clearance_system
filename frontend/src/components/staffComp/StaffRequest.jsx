import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper, Button } from "@mui/material/";
import { grey } from "@mui/material/colors";
import { useState, useEffect } from "react";
import axios from "axios";

const StaffRequest = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/employees",{
      headers: {
        accessToken: sessionStorage.getItem("accessToken"),
      }
    }).then((response) => {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const background = {
    backgroundColor: grey[400],
  };
  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: "55%", minHeight: "50%", marginBottom: "0px" }}
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
          <TableRow sx={background} >
            <TableCell>No</TableCell>
            <TableCell align="right">usename</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">designation</TableCell>
            <TableCell align="right">campus</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="center">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, id) => (
            <TableRow
              key={user.empId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {id + 1}
              </TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{user.designation}</TableCell>
              <TableCell align="right">{user.campus}</TableCell>
              <TableCell align="right">pending</TableCell>
              <TableCell align="right">
                <Button sx={{ background: grey[100] }}>change status</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default StaffRequest;
