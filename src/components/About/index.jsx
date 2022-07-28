import React from "react";
import Title from "../Title/Title";
import sandra from '../../img/sandra.png';

const About = () => {
  return (
    <>
      <Title>About the artist</Title>
      <div className="flex justify-center">
        <img src={sandra} alt="" />
        <div className="flex-column">
          <h2 className="subtitle">Hello, my name is Sandra Molfino</h2>
          <p>
            I am the reborn artist behind Sweet Cotton Clouds Reborn Nursery. I started in this
            amazing world more than 10 years ago as a collector.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="para">
          By that time, I was experiencing infertility problems and saw one of these beautiful
          babies on sale; I couldn’t believe how realistic they were, and decided to buy one. After
          several years I had my first baby, and I continued collecting until my second baby was
          born. I felt that collecting was not giving me enough happiness, so invoking my painting
          skills and a great passion for this art, I decided to start my career as a reborn artist.
          This is how my dream of Sweet Cotton Clouds Reborn Nursery began. Since then, all my love
          and passion has been poured into each of my creations, each of my babies goes to their new
          homes with a piece of my heart. Here you can find some pics of my work but if you would
          like to see more you are welcome to visit my page.
        </p>
      </div>

      <style jsx>{`
        img {
          height: 45rem;
        }
        .subtitle {
          font-size: 350%;
          max-width: 10ch;
        }
        p {
          font-size: 250%;
          max-width: 15ch;
        }

        .para {
          max-width: 75%;
          font-size: 250%;
          font-weight: 400;
          line-height: 50px;
        }
      `}</style>
    </>
  );
};

export default About;
