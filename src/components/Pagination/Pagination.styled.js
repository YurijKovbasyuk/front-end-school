import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.ul`
  margin-top: 20px;
  padding: 12px 10px;
  display: flex;
  justify-content: space-around;

  background-color: ${p => p.theme.colors.bgSecond};
  /* border-radius: 20px; */
  box-shadow: 17px 14px 24px ${p => p.theme.colors.shadow};

  transition: box-shadow ${p => p.theme.animation.cubicBezier};

  :hover,
  :focus {
    box-shadow: 34px 30px 34px ${p => p.theme.colors.shadow};
  }

  ${device.tablet} {
    padding: 14px;
    border-radius: 40px;
  }
  ${device.desktop} {
    padding: 16px;
    border-radius: 40px;
  }
`;

export const Button = styled.button`
  padding: 20px;
  background-color: ${p => p.theme.colors.bgMain};
  border-radius: 50%;
  cursor: pointer;
`;
