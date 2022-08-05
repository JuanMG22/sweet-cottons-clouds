import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';

export const categories = [
  { id: 1, name: 'About the artist', url: '/about' },
  { id: 2, name: 'Gallery', url: '/gallery' },
  { id: 3, name: 'Contact me', url: '/contact' },
  { id: 4, name: 'Sales Policies', url: '/policies' }
];

export default function Navbar() {
  return (
    <>
      <nav className="roboto flex center z-max items-center ph4-l ph3 h-nav bg-secondary shadow-5">
        <div className="w-100 center mw9 dn flex-l justify-between overflow-hidden">
          <div className="w-logo">
            <Link className="center" to="/">
              <img src="/assets/logo.png" alt="Sweet Cotton Clouds" />
            </Link>
          </div>
          <div className="flex items-center">
            {categories.map(category => (
              <div className="mh2 f-categories" key={category.id}>
                <Link className="roboto" to={category.url}>
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-100 center mw9 flex justify-around dn-l">
          <div className="flex items-center">
            <Link to="/">
              <img className="w3" src="/assets/isologo.png" alt="logo" />
            </Link>
          </div>
          <div className="flex items-center tc italiana">
            <h1 className="f4 ph3">Sweet Cotton Clouds</h1>
          </div>
          <div className="flex items-center">
            <DropdownMenu />
          </div>
        </div>
      </nav>
      <style jsx>{`
        .h-nav {
          height: 7rem;
        }
        .w-logo {
          width: 200px;
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
}
