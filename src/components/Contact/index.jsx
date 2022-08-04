import React from 'react';
import Title from '../Title';

const Contact = () => (
  <>
    <Title>Contact Me</Title>

    <div className="roboto f4 flex flex-column items-center justify-center mt4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="h2 w-75 w-50-l pa3 br5 ba b--lightest-blue"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="h2 w-75 w-50-l pa3 br5 ba b--lightest-blue mv3"
      />
      <textarea
        rows="5"
        cols="40"
        name="textarea"
        placeholder="What you wanna say?"
        className="rn w-75 w-50-l pa3 br5 ba b--lightest-blue"
      />
      <button className="br-pill mv4 bg-white grow ph5 pv2 b tc f4">Submit</button>
    </div>

    <style jsx>{`
      .rn {
        resize: none;
      }
    `}</style>
  </>
);

export default Contact;
