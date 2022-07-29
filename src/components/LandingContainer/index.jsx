import React from 'react';
import carrousel from '../../assets/carrousel.png';
import Title from '../Title';

const Home = () => (
  <>
    <div className="w-100 mt3">
      <img className="w-100 h-carrousel fit br2 shadow-5" src={carrousel} />
    </div>
    <Title>Reborn Babies</Title>
    <style jsx>{`
      .h-carrousel {
        height: 400px;
      }
    `}</style>
  </>
);

export default Home;
