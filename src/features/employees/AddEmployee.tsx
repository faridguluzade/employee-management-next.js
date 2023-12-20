"use client";

import React, { useState } from "react";
import { Drawer, Button, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open Sidebar</Button> */}
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 2" />
          </ListItem>
          {/* Add more ListItems as needed */}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
