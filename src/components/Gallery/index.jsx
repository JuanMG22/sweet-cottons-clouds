import React from 'react';
import Title from '../Title/index';
import { Gallery as MyGallery, Item } from 'react-photoswipe-gallery';
import '../../../node_modules/photoswipe/dist/photoswipe.css';

const Gallery = () => {
  const rebornImages = [
    { id: 0, images: { src1: '/assets/images/1.png', src2: '/assets/images/2.png' } },
    { id: 1, images: { src1: '/assets/images/3.png', src2: '/assets/images/4.png' } },
    { id: 2, images: { src1: '/assets/images/5.png', src2: '/assets/images/6.png' } },
    { id: 3, images: { src1: '/assets/images/7.png', src2: '/assets/images/8.png' } },
    { id: 4, images: { src1: '/assets/images/9.png', src2: '/assets/images/10.png' } },
    { id: 5, images: { src1: '/assets/images/11.png', src2: '/assets/images/12.png' } },
    { id: 6, images: { src1: '/assets/images/13.png', src2: '/assets/images/14.png' } },
    { id: 7, images: { src1: '/assets/images/15.png', src2: '/assets/images/16.png' } }
  ];
  const fantasyImages = [
    { id: 0, images: { src1: '/assets/images/17.png', src2: '/assets/images/18.png' } }
  ];

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
