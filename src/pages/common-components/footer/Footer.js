import React from 'react';
import styled from 'styled-components';
import { xs, sm } from '../../styled-components/device';
import { theme } from '../../styled-components/theme';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #598222;

  .footer-bar {
    width: 100%;
    height: 16px;
    background-color: #344702;
  }

  .site-footer {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;

    ${xs}{
      flex-wrap: wrap;
    }

    p {
      color: ${theme.white};
      font-size: 15px;
      line-height: 22px;
      margin-bottom: 16px;
      ${sm}{
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: -0.25px;
      }

      &:last-child{
        margin-bottom: 0;
      }
      
      span {
        color: #344703;
        display: block;
        font-size: ${theme.large};
        line-height: ${theme.lineHeight1_2};
        letter-spacing: -0.3px;
        font-weight: ${theme.semiBold};
        text-transform: uppercase;
        margin-bottom: 4px;

        ${sm}{
          font-size: ${theme.xLarge};
          line-height: ${theme.lineHeight1_09};
          letter-spacing: -0.25px;
        }
      }

      a {
        display: inline-block;
        color: ${theme.white};
        transition: text-shadow .4s ease;

        &:hover {
          text-shadow: 0px 0px 16px rgba(0,0,0,1);
        }
      }
    }

    .left-col {
      width: 100%;
      ${xs}{
        margin-bottom: 16px;
      }
      ${sm}{
        width: 70%;
      }
    }

    .right-col {
      width: 100%;
      ${sm}{
        width: 30%;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-bar" />
      <div className="site-footer container xs-fullwidth">
        <div className="left-col">
          <p>
            <span>Address</span>
            Shop 15,<br />
            Highland ParkShopping Center<br />
            503 Pakuranga Rd,<br />
            Pakuranga
          </p>
        </div>
        <div className="right-col">
          <p>
            <span>Phone</span>
            <a href="tel:(09) 534-5338">(09) 534-5338</a>
          </p>
          <p>
            <span>Email</span>
            <a href="mailto:daniel-awr808@hotmail.com">daniel-awr808@hotmail.com</a>
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;