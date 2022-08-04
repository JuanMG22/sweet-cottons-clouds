import React from 'react';
import Title from '../Title';

const About = () => (
  <>
    <Title>About the artist</Title>
    <div className="flex flex-column flex-row-l justify-center">
      <img className="contain w-50 w-100-l center" src="/assets/sandra.png" alt="Artist" />
      <div className="flex-column">
        <h2 className="f1 roboto tc ph3">Hello, my name is Sandra Molfino</h2>
        <p className="roboto center w-90 tj f2">
          I am the reborn artist behind Sweet Cotton Clouds Reborn Nursery. I started in this
          amazing world more than 10 years ago as a collector.
        </p>
        <p className="mt5 roboto center w-90 tj f2">
          By that time, I was experiencing infertility problems and saw one of these beautiful
          babies on sale; I couldn’t believe how realistic they were, and decided to buy one. After
          several years I had my first baby, and I continued collecting until my second baby was
          born.
        </p>
      </div>
    </div>
    <div className="flex flex-column items-center">
      <p className="roboto center w-90 tj f2">
        I felt that collecting was not giving me enough happiness, so invoking my painting skills
        and a great passion for this art, I decided to start my career as a reborn artist. This is
        how my dream of Sweet Cotton Clouds Reborn Nursery began. Since then, all my love and
        passion has been poured into each of my creations, each of my babies goes to their new homes
        with a piece of my heart. Here you can find some pics of my work but if you would like to
        see more you are welcome to visit my page.
      </p>
    </div>
  </>
);

export default About;
