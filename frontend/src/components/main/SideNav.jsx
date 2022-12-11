import { Box, Button, Paper, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { parentContext } from "../../state/ContextState";

export const background = {
  backgroundColor: grey[300],
};
const SideNav = () => {
  const sideNavContext = useContext(parentContext);

  const defaultNavItem = ["Contact", "help", "about"];
  const staffNavItem = ["clearance", "officer"];
  const adminNavItem = ["Requests", "Assign head", "Add Dept", "Register"];

  const navigate = useNavigate();

  return (
    <Box
      flex={1}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 230,
          minHeight: 215,
        },
      }}
    >
      <Paper elevation={10}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
          }}
        >
          Menu
        </Button>
        <Stack>
          <Button onClick={() => navigate("/")} sx={background}>
            Home
          </Button>
          {sideNavContext.sideNavValue === 1 ? (
            <>
              {adminNavItem.map((item) => (
                <Button
                  key={item}
                  onClick={() => {
                    navigate(`/${item}`);
                  }}
                  style={{ textDecoration: "none" }}
                  sx={background}
                >
                  {item}
                </Button>
              ))}
            </>
          ) : sideNavContext.sideNavValue === 2 ||
            sideNavContext.sideNavValue === 4 ? (
            <>
              {sideNavContext.sideNavValue === 4 && (
                <Button
                  sx={background}
                  onClick={() => {
                    navigate("/staff");
                  }}
                >
                  staff req
                </Button>
              )}

              {staffNavItem.map((item) => (
                <Button
                  key={item}
                  onClick={() => {
                    navigate(`/${item}`);
                  }}
                  style={{ textDecoration: "none" }}
                  sx={background}
                >
                  {item}
                </Button>
              ))}
            </>
          ) : (
            ""
          )}
          {defaultNavItem.map((item) => (
            <Button
              key={item}
              onClick={() => {
                navigate(`/${item}`);
              }}
              style={{ textDecoration: "none" }}
              sx={background}
            >
              {item}
            </Button>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default SideNav;
