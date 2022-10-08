import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
export default function MainPage() {
  return (
    <Box className="container" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h3" component={"h2"} className="headerStyle">
            Hello
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Hello</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
