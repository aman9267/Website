import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const NAVBAR = ["Home", "AboutUs", "Project", "ContactUs"];

export default function DrawerComp() {
  const [openDrawer, setStatus] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setStatus(false)}
        anchor={"left"}
      >
        <List>
          {NAVBAR.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>
                  <Link
                    style={{ textDecoration: "none", color: "Black" }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setStatus(!openDrawer)}
        sx={{ color: "white", marginLeft: "auto" }}
      >
        <MenuIcon sx={{ fontSize: "40px" }} />
      </IconButton>
    </React.Fragment>
  );
}
