import React from 'react';

const Title = ({ children }) => (
  <>
    <div className="flex justify-center items-center bg-custom w-100 mv3">
      <h1 className="f1 ma0 italiana pv4">{children}</h1>
    </div>
    <style jsx>{`
      .bg-custom {
        background: #ffadf7;
      }
    `}</style>
  </>
);

export default Title;
