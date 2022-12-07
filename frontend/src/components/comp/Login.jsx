import React from "react";
import { useNavigate } from "react-router-dom";
import { InputAdornment, Button, TextField, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import axios from "axios";
import { useState} from "react";
// import {  useContext } from "react";

// import { Addisu } from "../App";

const Login = () => {
  const [loginValue, setLoginValue] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
//   const Aschale = useContext(Addisu);

  const register = () => {
    navigate("/register");
  };

  const handleChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newValues = { ...loginValue };
    newValues[fieldName] = fieldValue;
    setLoginValue(newValues);
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3002/login", loginValue).then((res) => {
      if (res.data.error) {
        // Aschale.setDialogValue({ description: res.data.error, open: true });
      } else {
        sessionStorage.setItem("accessToken", res.data.accessToken);
        navigate("/");
        // Aschale.setDisplay(!Aschale.display)
        // Aschale.setDialogValue({ description: res.data.success, open: true });
      }
    });
  };

  return (
    <Stack alignItems={"center"}>
      <Stack
        marginTop={"100px"}
        sx={{
          minWidth: {
            xs: "350px",
            sm: "600px",
          },
          gap: "40px",
        }}
      >
        <Stack alignItems={"center"}>
          <AccountCircle
            color="primary"
            sx={{
              height: "100px",
              width: "100px",
            }}
          />
          login
        </Stack>
        <TextField
          name="username"
          placeholder="username"
          value={loginValue.username}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="password"
          name="password"
          type={"password"}
          value={loginValue.password}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HttpsIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          marginTop: "60px",
          paddingY: "8px",
          minWidth: {
            xs: "200px",
            sm: "300px",
          },
        }}
      >
        Login
      </Button>

      <Stack direction={"row"} my={"30px"}>
        <Button onClick={register}>
          <Link>Register?</Link>
        </Button>
        {/* <Button >Forget?</Button> */}
      </Stack>
    </Stack>
  );
};

export default Login;