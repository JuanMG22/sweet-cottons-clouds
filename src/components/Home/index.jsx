import React, { useEffect } from 'react';
import Title from '../Title';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    { id: 1, src: '/assets/images/11.png', alt: '' },
    { id: 2, src: '/assets/images/2.png', alt: '' },
    { id: 3, src: '/assets/images/18.png', alt: '' }
  ];
  return (
    <>
      <div className="w-100 mt3">
        <img className="w-100 h-carrousel fit shadow-5" src="/assets/carrousel.png" />
      </div>
      <Title>Reborn Babies</Title>
      <div className="flex flex-row-ns items-center flex-column mv4 w-100 ph3 justify-around overflow-hidden">
        {images.map(image => (
          <img key={image.id} src={image.src} alt={image.alt} className="grow w-80 w-30-ns" />
        ))}
      </div>
      <p className="ph2 f2 tc roboto">Welcome to my nursery!</p>
      <p className="ma0 f3 w-80 w-90-ns center tj roboto">
        Here you will find your dream baby for your collection or a special therapy baby for you or
        someone you love. I dedicate lots of hours creating each baby, they are made with lots of
        love and each one goes home with a piece of my heart.
      </p>
      <style jsx>{`
        .h-carrousel {
          height: 400px;
        }
      `}</style>
    </>
  );
};

export default Home;
