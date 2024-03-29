import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const DropdownMenu = () => (
  <>
    <Menu
      menuButton={({ open }) => (
        <button className="flex grow br2 ph3 pv2">
          {open ? <FaTimes className="f5" /> : <FaBars className="f5" />}
        </button>
      )}
      viewScroll="initial"
      direction="bottom"
      align="end"
      transition
      arrow
    >
      <Link to="/">
        <MenuItem>Home</MenuItem>
      </Link>
      <Link to="/about">
        <MenuItem>About the artist</MenuItem>
      </Link>
      <Link to="/gallery">
        <MenuItem>Gallery</MenuItem>
      </Link>
      <Link to="/contact">
        <MenuItem>Contact</MenuItem>
      </Link>
      <Link to="/policies">
        <MenuItem>Sales Policies</MenuItem>
      </Link>
    </Menu>
  </>
);

export default DropdownMenu;
