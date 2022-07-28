import FsLightbox from 'fslightbox-react';
import React, { useState } from 'react';
import Title from '../Title';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';

const Gallery = () => {
  const rebornImages = [
    { id: 0, images: { src1: img1, src2: img2 } },
    { id: 1, images: { src1: img3, src2: img4 } }
  ];

  const [toggler, setToggler] = useState(false);

  return (
    <>
      <Title>Gallery</Title>
      <h2 className="titulo flex justify-center">Reborn Babies</h2>

      <div className="flex flex-column justify-center items-center w-100">
        {rebornImages.map(img => (
          <div className="fl w-50 flex justify-center" key={img.id}>
            <img onClick={() => setToggler(!toggler)} src={img.images.src1} alt="" />
            <img onClick={() => setToggler(!toggler)} src={img.images.src2} alt="" />
          </div>
        ))}
      </div>

      <FsLightbox toggler={toggler} type="image" sources={[img1, img2, img3, img4]} />

      <style jsx>{`
        .titulo {
          font-size: 350%;
          font-family: 'Italiana';
          font-style: normal;
          font-weight: 600;
          line-height: 118px;
        }
      `}</style>
    </>
  );
};

export default Gallery;
