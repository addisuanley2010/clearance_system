import React from "react";
import { useNavigate } from "react-router-dom";
import { InputAdornment, Button, TextField, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import axios from "axios";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import { useContext } from "react";
// import { parentContext } from "../../state/ContextState";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const [loginValue, setLoginValue] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  // const loginContext = useContext(parentContext);

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
        // loginContext.setDialogValue({ description:res.data.error, open: true });
      } else {
        sessionStorage.setItem("accessToken", res.data.accessToken);
        navigate("/");
        // loginContext.setDialogValue({ description: res.data.success, open: true });
        console.log(res.data)
      

      }
    });
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
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
          type={passwordShown ? "text" : "password"}
          value={loginValue.password}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HttpsIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={togglePassword}>
                  {!passwordShown ? (
                    <VisibilityOffIcon />
                  ) : (
                    <RemoveRedEyeIcon />
                  )}
                </Button>
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
