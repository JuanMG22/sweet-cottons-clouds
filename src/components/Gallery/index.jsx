import React from 'react';
import Title from '../Title/index';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';
import img9 from '../../assets/9.png';
import img10 from '../../assets/10.png';
import img11 from '../../assets/11.png';
import img12 from '../../assets/12.png';
import img13 from '../../assets/13.png';
import img14 from '../../assets/14.png';
import img15 from '../../assets/15.png';
import img16 from '../../assets/16.png';
import img17 from '../../assets/17.png';
import img18 from '../../assets/18.png';

import '../../../node_modules/photoswipe/dist/photoswipe.css';
import { Gallery as MyGallery, Item } from 'react-photoswipe-gallery';

const rebornImages = [
  { id: 0, images: { src1: img1, src2: img2 } },
  { id: 1, images: { src1: img3, src2: img4 } },
  { id: 2, images: { src1: img5, src2: img6 } },
  { id: 3, images: { src1: img7, src2: img8 } },
  { id: 4, images: { src1: img9, src2: img10 } },
  { id: 5, images: { src1: img11, src2: img12 } },
  { id: 6, images: { src1: img13, src2: img14 } },
  { id: 7, images: { src1: img15, src2: img16 } }
];

const fantasyImages = [{ id: 0, images: { src1: img17, src2: img18 } }];

const Gallery = () => {
  return (
    <>
      <Title>Gallery</Title>
      <h2 className="f1 italiana flex justify-center">Reborn Babies</h2>

      <div className="flex flex-column justify-center items-center w-100">
        <MyGallery>
          {rebornImages.map(img => (
            <div className="fl w-50 w-30-l flex justify-center" key={img.id}>
              <Item
                cropped
                original={img.images.src1}
                thumbnail={img.images.src1}
                width="980"
                height="980"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={img.images.src1} alt="reborn bebe" />
                )}
              </Item>

              <Item
                cropped
                original={img.images.src2}
                thumbnail={img.images.src2}
                width="980"
                height="980"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={img.images.src2} alt="reborn bebe" />
                )}
              </Item>
            </div>
          ))}
        </MyGallery>

        <h2 className="f1 italiana flex justify-center tc">Reborn Fantasy Babies</h2>
        <MyGallery>
          {fantasyImages.map(img => (
            <div className="fl w-50 w-30-l flex justify-center" key={img.id}>
              <Item
                cropped
                original={img.images.src1}
                thumbnail={img.images.src1}
                width="980"
                height="980"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={img.images.src1} alt="reborn bebe" />
                )}
              </Item>

              <Item
                cropped
                original={img.images.src2}
                thumbnail={img.images.src2}
                width="980"
                height="980"
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
