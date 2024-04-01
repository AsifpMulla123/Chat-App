import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ ancherE1 }) => {
  return (
    <Menu open={false} anchorEl={ancherE1} style={{ width: "10rem" }}>
      FileMenu
    </Menu>
  );
};

export default FileMenu;
