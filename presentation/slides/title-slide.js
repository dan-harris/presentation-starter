import React from 'react';
import { Heading, Image, Layout, Slide } from 'spectacle';
import { images } from '../images';

export const TitleSlide = () => (
  <Slide transition={['zoom']} bgColor="backgroundAlternate" textColor="textAlternate" bgImage={images.genericBGAlternate} bgSize="auto">
    <Layout style={{ justifyContent: 'center' }}>
      <Layout fit style={{ margin: '2.25rem 2.25rem 0 0' }}>
        <Image src={images.questSwords} width={150} height={150} />
      </Layout>
      <Layout style={{ flexDirection: 'column' }}>
        <Heading size={1}>aspnet + typescript</Heading>
        <Heading size={2} textAlign="left">
          a quest for sanity
        </Heading>
      </Layout>
    </Layout>
  </Slide>
);
