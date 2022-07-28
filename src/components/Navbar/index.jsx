import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const categories = [
    { name: 'About the artist', url: '/about' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Contact me', url: '/contact' },
    { name: 'Sales Policies', url: '/policies' }
  ];
  return (
    <>
      <nav className="flex justify-between items-center h-nav bg-secondary shadow-2">
        <div className="flex items-center w-logo mh2">
          <Link className="center" to="/">
            <img src={logo} alt="Sweet Cotton Clouds" />
          </Link>
        </div>
        <div className="flex items-center">
          {categories.map(category => (
            <div className="mh2 f-categories">
              <Link to={category.url}>{category.name}</Link>
            </div>
          ))}
        </div>
      </nav>
      <style jsx>{`
        .h-nav {
          height: 6rem;
        }
        .w-logo {
          width: 210px;
        }
        .pr-search {
          padding-right: 70px;
        }
        .f-categories {
          font-size: 18px;
        }
      `}</style>
    </>
  );
};

export default Navbar;
