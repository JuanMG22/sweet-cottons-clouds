import React from 'react';

const Navbar = () => {
  const items = [
    {
      id: 1,
      title: 'Gallery',
      url: '/'
    },
    {
      id: 2,
      title: 'About the artist',
      url: '/'
    },
    {
      id: 3,
      title: 'Contact me',
      url: '/'
    },
    {
      id: 4,
      title: 'Sales Policies',
      url: '/'
    }
  ];

  return (
    <>
      <nav className="pa3 pa4-ns w-100 absolute top-0 flex items-center">
        <div className="tc ttu center w-100">
          {items.map(item => (
            <a key={item.id} className="link dim white f6 f5-ns dib mh2" href={item.url}>
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
