import React from 'react';

const Title = ({ children }) => {
  return (
    <>
      <div className="flex justify-center items-center bg mt3">
        <h1 className="text ma0">{children}</h1>
      </div>

      <style jsx>{`
        .bg {
          background: #ffadf7;
          height: 100%;
        }
        .text {
          font-size: 350%;
          font-family: 'Italiana';
          font-style: normal;
          font-weight: 600;
          line-height: 118px;
        }
      `}</style>
    </>
  );
};

export default Title;
