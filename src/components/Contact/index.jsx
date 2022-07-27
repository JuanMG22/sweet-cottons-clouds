import React from "react";
import Title from "../Title/Title";

const Contact = () => {
  return (
    <>
      <Title>Contact Me</Title>

      <div className="flex flex-column items-center justify-center mt4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="h2 w-40 br5 ba b--lightest-blue mv2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="h2 w-40 br5 ba b--lightest-blue mv2"
        />
        <textarea
          rows="5"
          cols="40"
          name="textarea"
          placeholder="What you wanna say?"
          className="textarea  w-40 br5 ba b--lightest-blue mv2"
        />
        <button className="btn-form br2 mv4">Submit</button>
      </div>

      <style jsx>{`
        input {
          font-size: 150%;
          padding: 1.2rem;
          font-family: "Roboto";
          font-weight: 200;
        }

        textarea {
          font-size: 150%;
          padding: 1.2rem;
          font-family: "Roboto";
          font-weight: 200;
          resize: none;
        }

        .textarea::placeholder {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .btn-form {
          background: #fff;
          border: none;
          padding: 1rem 4rem;
          font-weight: bold;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 35px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #000000;
        }
      `}</style>
    </>
  );
};

export default Contact;
