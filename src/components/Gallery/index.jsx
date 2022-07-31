import React from 'react';
import Title from '../Title/index';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';

import '../../../node_modules/photoswipe/dist/photoswipe.css';
import { Gallery as MyGallery, Item } from 'react-photoswipe-gallery';

const Gallery = () => {
  const rebornImages = [
    { id: 0, images: { src1: img1, src2: img2 } },
    { id: 1, images: { src1: img3, src2: img4 } }
  ];

  return (
    <>
      <Title>Gallery</Title>
      <h2 className="f1 italiana flex justify-center">Reborn Babies</h2>

      <div className="flex flex-column justify-center items-center w-100">
        <MyGallery>
          {rebornImages.map(img => (
            <div className="fl w-50 flex justify-center" key={img.id}>
              <Item
                cropped
                original={img.images.src1}
                thumbnail={img.images.src1}
                width="680"
                height="680"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={img.images.src1} alt="reborn bebe" />
                )}
              </Item>

              <Item
                cropped
                original={img.images.src2}
                thumbnail={img.images.src2}
                width="680"
                height="680"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={img.images.src2} alt="reborn bebe" />
                )}
              </Item>
            </div>
          ))}
        </MyGallery>
      </div>
    </>
  );
};

export default Gallery;
