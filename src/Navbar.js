import {
  AppBar,
  Button,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Style.css";
import "./Theam.css";
import DrawerComp from "./DrawerComp";
import { Link } from "react-router-dom";
import ElectricRickshawSharpIcon from "@mui/icons-material/ElectricRickshawSharp";

export default function Navbar() {
  const theme = useTheme();
  const [value, setvalue] = useState(0);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "#222" }}>
        <Toolbar>
          <Link to="/" className="link">
            <h3 to="/" style={{ fontFamily: "cursive", cursor: "pointer" }}>
              Mohd Aman
            </h3>
          </Link>

          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <Tabs sx={{ margin: "auto" }}>
                <Link className="link" to="/Home">
                  <Tab color="primary" value="Home" label="Home" />
                </Link>
                <Link className="link" to="/AboutUs">
                  <Tab value="AboutUs" label="About Us" />
                </Link>
                <Link className="link" to="/Projects">
                  <Tab value="Projects" label="Projects" />
                </Link>
                <Link className="link" to="/ContactUs">
                  <Tab value="ContactUs" label="Contact Us" />
                </Link>
              </Tabs>
              <Link className="link" to="/login">
                <Button sx={{ marginLeft: "auto" }} variant={""}>
                  Login
                </Button>
              </Link>
              <Link className="link" to="/Register">
                <Button sx={{ marginLeft: "auto" }} variant={""}>
                  Register
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
