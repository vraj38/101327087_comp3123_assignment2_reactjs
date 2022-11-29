import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import {Box, Typography} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const Header = styled(AppBar)`
  background: #111111;
`;


const Navbar = () => {
  return (
    <Header position="static">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>

            <Tabs to='/'><HomeIcon fontSize="large" /></Tabs>

            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Employee Management App
            </Typography>
            
            <Tabs to='/add'>Add Employees</Tabs>
          </Toolbar>
        </AppBar>
      </Box>
    </Header>
  );
};

export default Navbar;
