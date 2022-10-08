import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Style.css";

import "./Theam.css";
import Navbar from "./Navbar";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import MainPage from "./MainPage";
export default function Headers() {
  return (
    <>
      <Navbar />
      <Box className="main-color header-style">
        <MainPage />
      </Box>
    </>
  );
}
