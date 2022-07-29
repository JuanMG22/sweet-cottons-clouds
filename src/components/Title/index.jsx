import React from 'react';

const Title = ({ children }) => (
  <>
    <div className="flex justify-center items-center bg w-100 mt3">
      <h1 className="f-title ma0 italiana pv4">{children}</h1>
    </div>
    <style jsx>{`
      .bg {
        background: #ffadf7;
      }
      .f-title {
        font-size: 350%;
      }
    `}</style>
  </>
);

export default Title;
