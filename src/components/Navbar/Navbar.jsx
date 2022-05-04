import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import {
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Navbar = () => (
  <>
    <nav className="h-16 z-50 flex items-center px3 bg-black white overflow-hidden">
      <Box className="w-100 center mw9 dn flex-l justify-between">
        <Box className="flex items-center w-20"></Box>
        <Box className="flex items-center">
          <Menu>
            <MenuButton
              variant="solid"
              bg="white"
              className="primary shadow-4"
              as={Button}
              rightIcon={<BiChevronDown className="f3 pa0 ma0 primary" />}
            >
              Categorías
            </MenuButton>
            <MenuList color="black" bg="white">
              <MenuItem>Todas</MenuItem>
              <MenuItem>Aventura</MenuItem>
              <MenuItem>Gastronomía</MenuItem>
              <MenuItem>Estadías</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </nav>
  </>
);

export default Navbar;
