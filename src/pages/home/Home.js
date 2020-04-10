import React from 'react';
import styled from 'styled-components';
import HeroBanner from './Components/HeroBanner';
import SecondFold from './Components/SecondFold';
import ThirdFold from './Components/ThirdFold';
import FourthFold from './Components/FourthFold';
import { sm } from '../styled-components/device';
import { theme } from '../styled-components/theme';

const HomeWrapper = styled.div`
  p {
    color: ${theme.baseColor};
    margin-bottom: 16px;
    
    ${sm}{
      font-size: ${theme.medium};
      line-height: ${theme.lineHeight1_5};
      letter-spacing: -0.25px;
    }
    
    &:last-child{
      margin-bottom: 0;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HeroBanner />
      <SecondFold />
      <ThirdFold />
      <FourthFold />
    </HomeWrapper>
  );
};

export default Home;
