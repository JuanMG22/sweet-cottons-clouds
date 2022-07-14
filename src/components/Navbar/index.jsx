import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = [
    { name: "About the artist", url: "/about" },
    { name: "Gallery", url: "/gallery" },
    { name: "Contact me", url: "/contact" },
    { name: "Sales Policies", url: "/policies" },
  ];
  return (
    <>
      <nav className="center flex items-center white ph3 h-nav bg-black">
        <div className="flex items-center w-20">
          <Link className="center" to="/"></Link>
        </div>
        <div className="flex items-center">
          {categories.map((category) => (
            <div className="mr2">
              <Link to={category.url}>{category.name}</Link>
            </div>
          ))}
        </div>
      </nav>
      <style jsx>{`
        .h-nav {
          height: 5rem;
        }
        .pr-search {
          padding-right: 70px;
        }
      `}</style>
    </>
  );
};

export default Navbar;
