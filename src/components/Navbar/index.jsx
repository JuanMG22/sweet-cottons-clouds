import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import DropdownMenu from '../DropdownMenu';

const Navbar = () => {
  const categories = [
    { id: 1, name: 'About the artist', url: '/about' },
    { id: 2, name: 'Gallery', url: '/gallery' },
    { id: 3, name: 'Contact me', url: '/contact' },
    { id: 4, name: 'Sales Policies', url: '/policies' }
  ];
  return (
    <>
      <nav className="roboto flex center z-max items-center ph4 h-nav bg-secondary shadow-5">
        <div className="w-100 center mw9 dn flex-l justify-between overflow-hidden">
          <div className="w-logo">
            <Link className="center" to="/">
              <img src={logo} alt="Sweet Cotton Clouds" />
            </Link>
          </div>
          <div className="flex items-center">
            {categories.map(category => (
              <div className="mh2 f-categories" key={category.id}>
                <Link to={category.url}>{category.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-100 center mw9 flex justify-between dn-l">
          <div className="flex items-center">
            <Link to="/">
              <img className="w-isologo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <DropdownMenu />
          </div>
        </div>
      </nav>
      <style jsx>{`
        .h-nav {
          height: 6rem;
        }
        .w-logo {
          width: 210px;
        }
        .w-isologo {
          width: 180px;
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
