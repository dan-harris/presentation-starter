import React from 'react';
import { Image, Notes, Slide } from 'spectacle';
import { images } from '../images';

export const ImageSlide = () => (
  <Slide>
    <Image src={images.goodWork} width={500} />
    <Notes>gifs work too</Notes>
  </Slide>
);
