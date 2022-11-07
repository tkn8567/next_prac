import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import BlindIcon from '@mui/icons-material/Blind';

const Header = () => {
return (
    <AppBar position="static" style={{ backgroundColor: "#000000" }}>
    <Toolbar>
        <BlindIcon/>
        <span>いくらなんでも成果なさすぎ株式会社</span>
    </Toolbar>
    </AppBar>
);
};

export default Header;
