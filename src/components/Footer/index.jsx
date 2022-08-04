import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import { categories } from '../Navbar/index';

const Footer = () => (
  <>
    <footer className="flex-ns-column flex-l justify-center-ns justify-around-l items-center w-100 h100 h5-l ph4 ph3-ns bg-white shadow-5">
      <div className="flex-column items-center w5-l w10 pv3 mt3">
        <Link className="center" to="/">
          <img src={logo} alt="Sweet Cotton Clouds" />
        </Link>
        <div className="f3 flex mt3">
          <a
            className="center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/sweetcottonclouds_rn/"
          >
            <FaInstagram />
          </a>
          <a
            className="center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/sweetcottonclouds/"
          >
            <FaFacebook />
          </a>
          <a
            className="center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://vm.tiktok.com/ZMN58Su5C/?k=1"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
      <div className="flex flex-column normal pv3 mt3">
        {categories.map(category => (
          <Link to={category.url} key={category.id} className="links-footer tc tl-l">
            {category.name}
          </Link>
        ))}
      </div>
    </footer>

    <style jsx>{`
      .links-footer {
        font-size: 140%;
        padding: 0.3rem 0;
        font-family: 'Roboto', sans-serif;
      }
    `}</style>
  </>
);

export default Footer;
