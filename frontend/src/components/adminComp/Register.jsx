import React,{useState} from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CallIcon from "@mui/icons-material/Call";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { parentContext } from "../../state/ContextState";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  InputAdornment,
  Button,
  TextField,
  Stack,
  Typography,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Register = () => {
  const [value, setValue] = useState("")
  const validationSchema = yup.object({
    username: yup.string().required().min(3).max(15),
    fname: yup.string().required().min(3).max(20),
    lname: yup.string().required().min(3).max(20),
    mname: yup.string().required().min(3).max(20),
    email: yup.string().required().email(),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    campus: yup.string().required().min(3).max(10),
    password: yup.string().required().min(4).max(10),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      fname: "",
      lname: "",
      mname: "",
      campus: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: validationSchema,
  });

  const registerContext = useContext(parentContext);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    navigate("/login");

    axios.post("http://localhost:3002/register", values).then((res) => {
      if (res.data.error) {
        registerContext.setDialogValue({
          description: res.data.error,
          open: true,
        });
        console.log(res);
      } else {
        registerContext.setDialogValue({
          description: res.data.success,
          open: true,
        });
        navigate("/login");
      }
    });
    console.log(values);
  };

  const departments=[
    {id:1,name:"software"},
    {id:2,name:"chemical"},
    {id:3,name:"mechanical"},
    {id:4,name:"industrial"},
    {id:5,name:"automotive"},
    {id:6,name:"civil"},
    {id:7,name:"electrical"},
    {id:8,name:"computer"}

  ]
  const option=departments.map(data=>{
    return(
      <MenuItem value={data.name} key={data.id}>
            {data.name}
      </MenuItem>
    )
  })

  return (
    <Stack alignItems={"center"}>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          sx={{
            minWidth: {
              xs: "350px",
              sm: "600px",
            },
            gap: "40px",
          }}
        >
          <Stack alignItems={"center"}>
            <PersonAddIcon
              color="primary"
              sx={{
                height: "100px",
                width: "100px",
              }}
            />

            <Typography color={"primary.light"}> create account</Typography>
          </Stack>
          <Box display={"flex"} flexDirection={"row"} gap={"5vh"}>
            <Stack gap={"2vh"}>
              <TextField
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.username)}
                helperText={formik.errors.username}
                placeholder="username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonAddAltIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                name="fname"
                value={formik.values.fname}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.fname)}
                helperText={formik.errors.fname}
                placeholder="first name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonAddAltIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                name="mname"
                value={formik.values.mname}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.mname)}
                helperText={formik.errors.mname}
                placeholder="father name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonAddAltIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                name="lname"
                value={formik.values.lname}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.lname)}
                helperText={formik.errors.lname}
                placeholder="last name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonAddAltIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
                name="email"
                type={"email"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Stack gap={"2vh"}>
              <TextField
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.phone)}
                helperText={formik.errors.phone}
                placeholder="phone"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CallIcon />
                    </InputAdornment>
                  ),
                }}
              />
           

              <Select value={value} onChange={(e)=>{setValue(e.target.value)}}>
                {option}
              </Select>
              <TextField
                name="campus"
                value={formik.values.campus}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.campus)}
                helperText={formik.errors.campus}
                placeholder="campus"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddLocationAltIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.password)}
                helperText={formik.errors.password}
                name="password"
                type={"password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HttpsIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                placeholder="confirm"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.confirmPassword)}
                helperText={formik.errors.confirmPassword}
                name="confirmPassword"
                type={"password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HttpsIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Box>
        </Stack>
        <Stack alignItems={"center"}>
          <Button
            variant="outlined"
            type="submit"
            sx={{
              marginTop: "50px",
              marginBottom: "50px",
              paddingY: "8px",
              "&:hover": {
                backgroundColor: "primary.light",
              },
              minWidth: {
                xs: "200px",
                sm: "300px",
              },
            }}
          >
            Register
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Register;
