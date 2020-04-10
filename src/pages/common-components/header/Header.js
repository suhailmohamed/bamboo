import React from 'react';
import styled from 'styled-components';
import { xs } from '../../styled-components/device';
import { theme } from '../../styled-components/theme';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 56px;
  z-index: ${theme.zIndex10};

  ${xs}{
    padding: 0 !important;
  }

  .menu-bar {
    display: flex;
    justify-content: center;
    background-color: rgba(197, 0, 0, .9);
    box-shadow: 0 0 16px rgba(197, 0, 0, 1);

    a {
      display: flex;
      padding: 12px 16px;
      background-color: transparent;
      color: ${theme.white};
      min-height: 56px;
      align-items: center;
      font-weight: ${theme.semiBold};
      transition: background-color .6s ease, color .4s ease;

      &:not(:last-child){
        margin-right: 16px;
      }

      &:hover, &.active {
        color: ${theme.black};
        background-color: #b2ec38;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper className="container xs-fullwidth">
      <div className="menu-bar">
        <a href="/" className="active">Home</a>
        <a href="/">Menu</a>
        <a href="/">Contact us</a>
      </div>
    </HeaderWrapper>
  );
};

export default Header;