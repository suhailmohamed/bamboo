import React from 'react';
import styled from 'styled-components';
import { sm } from '../../styled-components/device';
import { theme } from '../../styled-components/theme';

const FourthFoldWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 380px;
  background-color: ${theme.white};
  padding: 40px 0;

  p {
    &.large-txt {
      font-size: ${theme.large};
      line-height: ${theme.lineHeight1_2};
      letter-spacing: -0.3px;
      font-weight: ${theme.semiBold};
      
      ${sm}{
        font-size: ${theme.xLarge};
        line-height: ${theme.lineHeight1_09};
        letter-spacing: -0.25px;
      }
    }
  }
`;

const FourthFold = () => {
  return (
    <FourthFoldWrapper>
      <div className="container xs-fullwidth">
        <div className="row">
          <div className="col-sm-7">
            <p>It’s location in the Highland Park Shopping Centre is ideal too, with easy access and plenty of free parking meaning it’s a convenient stop at any hour of the day.</p>
            <p>At Bamboo Garden Cafe, the owners have created a wonderfully warm and welcoming environment and they pride themselves on their fantastic service.</p>
            <p>The team treat customers like family and really go out of their way to make sure everyone leaves satisfied.</p>
            <p>The good strong coffee, made by Daniel, is also a big draw card and a reason why so many regulars make Bamboo Garden Café their favourite coffee stop.</p>
          </div>
          <div className="col-sm-5">
            <p>Then there's the food which truly does offer something for everyone!</p>
            <p>There's a fantastic all day breakfast menu, a great selection of standard cafe fare like sandwiches, panini and slices, as well as more exotic dishes.</p>
            <p>Vegetarians are also well catered for, with an extensive array of options to choose from.</p>
            <p className="large-txt">
              Don't wait, come in and <br />
              meet the friendly staff and <br />
              treat your taste buds today!
            </p>
          </div>
        </div>
      </div>
    </FourthFoldWrapper>
  );
};

export default FourthFold;
