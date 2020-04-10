import React from 'react';
import styled from 'styled-components';
import { xs, sm } from '../../styled-components/device';
import { theme } from '../../styled-components/theme';

const SecondFoldWrapper = styled.div`
  ${sm}{
    width: 100%;
    min-height: 480px;
    background: url("./images/second-fold.jpg") no-repeat center / cover;
  }

  .second-fold-inner {
    display: flex;
    align-items: center;
    background-color: ${theme.white};
    min-height: 480px;
    padding: 40px 0;

    ${sm} {
      padding: 0 40px;
    }

    img {
      height: 388px;
      width: 100%;
      object-fit: contain;
      ${xs} {
        margin-top: 40px;
      }
      ${sm} {
        object-position: bottom right;
      }
    }
  }
`;

const SecondFold = () => {
  return (
    <SecondFoldWrapper>
      <div className="container xs-fullwidth">
        <div className="second-fold-inner">
          <div className="row">
            <div className="col-sm-6">
              <p>Kiwis love dining out and our café culture is thriving. Whether it’s a quick stop for coffee, a snack or brunch or lunch – we can’t get enough.</p>
              <p>Auckland is home to many great cafes, but one which consistently stands out for all the right reasons is Bamboo Garden Café in Highland Park. It’s a real crowd pleaser with its unique menu that is a blend of classic Kiwi café favourites as well as Singaporean and other Asian dishes.</p>
              <p>The secret to a successful café is a combination of fresh, tasty food, a warm and welcoming atmosphere and good value for your hard earned dollar – Bamboo Garden Café delivers on this promise.</p>
              <p>Bamboo Garden Cafe's popularity just keeps on growing as more customers discover the food, coffee and value of this fantastic dining destination and become regulars.</p>
            </div>
            <div className="col-sm-6 vertical-bottom">
              <img src="/images/second-fold-titles.png" alt="second-fold-titles" />
            </div>
          </div>
        </div>
      </div>
    </SecondFoldWrapper>
  );
};

export default SecondFold;
