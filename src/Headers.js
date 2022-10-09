import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import "./Style.css";
import "./Theam.css";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import MainPage from "./MainPage";
export default function Headers() {
  return (
    <React.Fragment>
      <Navbar />
      <Box className="header-style2 headerStyle">
        <Box className=" container">
          <Box className="Content">
            <Typography variant="h2" component={"h2"} sx={{ fontWeight: 900 }}>
              I'm UI/UX Designer
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>
              A tiny VS Code extension made up of a few commands that generate
              and insert
            </Typography>
            {/* <Button sx={{ marginTop: "10px", backgroundColor: "black" }}>
              Why Heire Me
            </Button> */}
          </Box>
          <Box className="image"></Box>
        </Box>
      </Box>
      <Typography>Hello</Typography>
    </React.Fragment>
  );
}
