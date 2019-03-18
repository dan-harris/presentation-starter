import React from 'react';
import { Layout } from 'spectacle';
import { images } from '../images';

// TODO: convert this to styled components

export const ProfileSlideContent = () => (
  <Layout style={{ justifyContent: 'center' }}>
    <style>
      {`
          /* logo pic + text */
          .logo {
            width: 530px;
            position: relative;
            text-align: left;
            font-family: lazer84;
          }
          
          .logo__profile-pic {
            border-radius: 50%;
            border: 0.45rem solid #fff;
            height: 214px;
            box-shadow: 0.5rem 0.3rem #9a88c7;
          }
          
          .logo__text__line1,
          .logo__text__line2 {
            font-size: 6rem;
            position: absolute;
            left: 200px;
            text-shadow: 0.5rem 0.3rem #9a88c7;
            transform: rotate(-5deg);
          }
          
          .logo__text__line2 {
            top: 6rem;
            left: calc(200px - 15px);
          }
          `}
    </style>
    <div className="logo">
      <img className="logo__profile-pic" alt="dan profile" src={images.profile} />
      <span className="logo__text__line1">DAN</span>
      <span className="logo__text__line2">HARRIS</span>
    </div>
  </Layout>
);
