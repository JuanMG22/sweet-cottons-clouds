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
        <button className="f6 grow br2 ph3 pv2 b--purple bw1">
          {open ? <FaTimes className="icon-menu" /> : <FaBars className="icon-menu" />}
        </button>
      )}
      viewScroll="initial"
      direction="bottom"
      align="end"
      transition
      arrow
    >
      <Link to="/" className="links-drop">
        <MenuItem>Home</MenuItem>
      </Link>
      <Link to="/about" className="links-drop">
        <MenuItem>About the artist</MenuItem>
      </Link>
      <Link to="/gallery" className="links-drop">
        <MenuItem>Gallery</MenuItem>
      </Link>
      <Link to="/contact" className="links-drop">
        <MenuItem>Contact</MenuItem>
      </Link>
      <Link to="/policies" className="links-drop">
        <MenuItem>Sales Policies</MenuItem>
      </Link>
    </Menu>

    <style jsx>{`
      .links-drop {
        padding: 0.3rem 0;
        font-family: 'Roboto', sans-serif;
      }
      .icon-menu {
        font-size: 125%;
      }
    `}</style>
  </>
);

export default DropdownMenu;
