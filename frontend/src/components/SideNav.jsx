import { Box, Button, Paper, Stack ,} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";
const SideNav = () => {


  const navItems = ["home", "register", "about", "help", "Contact"];

  const navigate=useNavigate()
  return (
    <Box
      flex={1}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 230,
          minHeight: 230,
        },
      }}
    >
      <Paper elevation={10}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
          }}>
          Menu
        </Button>
     <Stack>
         
          {navItems.map((item ) => (
              <Button key={item}
                onClick={()=>{
                  navigate(`/${item}`)
                }}
                style={{  textDecoration: "none" }}
                sx={{
                  backgroundColor:grey[300]
                }}
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
