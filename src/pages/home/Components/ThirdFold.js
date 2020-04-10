import React from 'react';
import styled from 'styled-components';
import { xs, sm, md } from '../../styled-components/device';
import { theme } from '../../styled-components/theme';

const ThirdFoldWrapper = styled.div`
  width: 100%;
  min-height: 520px;
  background-color: #6aa21b;

  .third-fold-inner {
    display: flex;
    align-items: flex-start;
    ${xs}{
      flex-wrap: wrap;
    }

    .left-col, .right-col {
      width: 100%;
      
      ${sm}{
        width: 50%;
      }
    }

    .left-col {
      display: flex;
      ${xs}{
        justify-content: center;
      }

      figure {
        display: flex;
        width: 175px;
        margin-bottom: 0;

        ${sm}{
          width: 50%;
        }

        &:first-child {
          flex-wrap: wrap;
          ${xs}{
            justify-content: flex-end;
          }

          img {
            &:first-child {
              height: 180px;
              ${sm}{
                height: 220px;
              }
              ${md}{
                height: 288px;
              }
            }
            &:last-child {
              margin-left: auto;
            }
          }
        }

        &:last-child {
          align-items: center;

          img {
            margin-right: auto;
            margin-left: 12px;
            margin-top: 50px;

            ${sm}{
              margin-top: 100px;
            }
          }
        }

        img {
          height: 128px;
          
          ${md}{
            height: 180px;
          }

          &:not(:last-child){
            margin-bottom: 12px;
          }
        }
      }
    }
    
    .right-col {
      margin: 40px 0 32px;

      p {
        color: ${theme.white};
      }
    }
  }

  .yellow-panel {
    color: ${theme.black};
    background-color: #ffcb05;
    padding: 12px;
    font-size: ${theme.large};
    line-height: ${theme.lineHeight1_2};
    letter-spacing: -0.3px;
    font-weight: ${theme.semiBold};
    text-align: center;
    margin-top: 24px;
    
    ${sm}{
      font-size: ${theme.xLarge};
      line-height: ${theme.lineHeight1_09};
      letter-spacing: -0.25px;
      padding: 12px 16%;
    }
  }
`;

const ThirdFold = () => {
  return (
    <ThirdFoldWrapper>
      <div className="container xs-fullwidth">
        <div className="third-fold-inner">
          <div className="left-col">
            <figure>
              <img src="./images/third-fold-1.jpg" alt="third-fold-1" />
              <img src="./images/third-fold-2.jpg" alt="third-fold-2" />
            </figure>
            <figure>
              <img src="./images/third-fold-3.jpg" alt="third-fold-3" />
            </figure>
          </div>
          <div className="right-col">
            <p>It’s location in the Highland Park Shopping Centre is ideal too, with easy access and plenty of free parking meaning it’s a convenient stop at any hour of the day.</p>
            <p>At Bamboo Garden Cafe, the owners have created a wonderfully warm and welcoming environment and they pride themselves on their fantastic service.</p>
            <p>The team treat customers like family and really go out of their way to make sure everyone leaves satisfied.</p>
            <p>The good strong coffee, made by Daniel, is also a big draw card and a reason why so many regulars make Bamboo Garden Café their favourite coffee stop.</p>
            <p>Then there's the food which truly does offer something for everyone!</p>
            <p>There's a fantastic all day breakfast menu, a great selection of standard cafe fare like sandwiches, panini and slices, as well as more exotic dishes.</p>
          </div>
        </div>

        <div className="yellow-panel">Vegetarians are also well catered for, with an extensive array of options to choose from.</div>
      </div>
    </ThirdFoldWrapper>
  );
};

export default ThirdFold;
