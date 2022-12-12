import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { parentContext } from "../../state/ContextState";
const Header = () => {
  const navigate = useNavigate();

  const headerContext = useContext(parentContext);

  const handleClik = () => {
    navigate("/login");
  };
  const logout = () => {
    headerContext.setLoginValue(false);
    headerContext.setSideNavValue(0);
    sessionStorage.removeItem("accessToken");
    navigate("/login");
  };
  const isAccessToken = Boolean(sessionStorage.getItem("accessToken"));
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton>
            <Avatar
              alt="Adda"
              src="http://localhost:3000/bdu.jpeg"
              sx={{
                width: 95,
                height: 95,
                margin: "5px",
              }}
            />
          </IconButton>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Bahir Dar University
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Online Employee Clearance System
            </Typography>
          </Typography>
          {!isAccessToken ? (
            <Button color="inherit" variant="text" onClick={handleClik}>
              Login
            </Button>
          ) : (
            <Button color="inherit" variant="text" onClick={logout}>
              logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
