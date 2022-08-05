import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import { categories } from '../Navbar';

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <footer className="flex justify-center mt5 items-center w-100 h5 bg-secondary shadow-4 justify-around-l">
        <div className="w5 mt3">
          <img src="/assets/logo.png" alt="Sweet Cotton Clouds" onClick={scrollTop} />
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
        <div className="dn flex-l flex-column mt3">
          {categories.map(category => (
            <Link to={category.url} key={category.id} className="roboto links-footer tl">
              {category.name}
            </Link>
          ))}
        </div>
      </footer>

      <style jsx>{`
        .links-footer {
          font-size: 140%;
          padding: 0.3rem 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
