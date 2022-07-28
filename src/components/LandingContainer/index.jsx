import React from 'react';
import carrousel from '../../assets/carrousel.png';

const Home = () => (
  <>
    <div className="w-100 mt3">
      <img className="w-100 h-carrousel fit br2 shadow-5" src={carrousel} />
    </div>
    <h2 className="bg-divider h4 mt4 flex justify-center items-center f-headline">Reborn Babies</h2>
    <style jsx>{`
      .h-carrousel {
        height: 400px;
      }
    `}</style>
  </>
);

export default Home;
