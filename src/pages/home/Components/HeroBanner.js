import React from 'react';
import styled from 'styled-components';
import { sm } from '../../styled-components/device';

const HeroBannerWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 540px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  img {
    width: 140px;
    height: 140px;
    object-fit: contain;
    background-color: rgba(0, 0, 0, 0.8);
    ${sm}{
      width: 180px;
      height: 180px;
    }
  }
`;

const HeroBanner = () => {
  return (
    <HeroBannerWrapper
      style={{
        backgroundImage: `url("./images/banner.jpg")`
      }}
    >
      <div className="container xs-fullwidth">
        <img src="./images/logo.png" alt="logo" />
      </div>
    </HeroBannerWrapper>
  );
};

export default HeroBanner;
