import React from 'react';
import Title from '../Title';

const Contact = () => (
  <>
    <Title>Contact Me</Title>

    <div className="roboto flex flex-column items-center justify-center mt4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="f3 h2 w-75 w-40-l ph3 br5 ba b--lightest-blue mv2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="f3 h2 w-75 w-40-l ph3 br5 ba b--lightest-blue mv2"
      />
      <textarea
        rows="5"
        cols="40"
        name="textarea"
        placeholder="What you wanna say?"
        className="rn f3 w-75 w-40-l ph3 br5 ba b--lightest-blue mv2"
      />
      <button className="btn-form br2 mv4 bg-white bn ph5 pv3 b tc f3">Submit</button>
    </div>

    <style jsx>{`
      .rn {
        resize: none;
      }
    `}</style>
  </>
);

export default Contact;
