import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  padding: 12px 10px;

  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: 20px;
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

export const Title = styled.h2`
  margin-bottom: 12px;

  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  text-align: center;
  color: ${p => p.theme.colors.textMain};

  ${device.tablet} {
    min-height: 44px;
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 1.375;
  }

  ${device.desktop} {
    min-height: 54px;

    font-size: 24px;
    line-height: 1.35;
  }
`;

export const ImgWrapper = styled.div`
  flex: 0 0 110px;

  ${device.tablet} {
    flex: 0 0 120px;
  }

  ${device.desktop} {
    flex: 0 0 158px;
  }
`;
export const Description = styled.h3`
  margin-bottom: 12px;

  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  text-align: center;
  color: ${p => p.theme.colors.textMain};

  ${device.tablet} {
    min-height: 44px;
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 1.35;
  }

  ${device.desktop} {
    min-height: 54px;

    font-size: 20px;
    line-height: 1.375;
  }
`;

export const LessonTitle = styled.h4`
  margin-bottom: 6px;

  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  text-align: center;
  color: ${p => p.theme.colors.textMain};

  ${device.tablet} {
    min-height: 30px;
    margin-bottom: 10px;

    font-size: 16px;
    line-height: 1.1;
  }

  ${device.desktop} {
    min-height: 40px;

    font-size: 22px;
    line-height: 1.2;
  }
`;
export const Item = styled.p`
  position: relative;
  font-size: 12px;
  line-height: 1.33;
  color: ${p => p.theme.colors.textSecond};

  ${device.tablet} {
    margin-bottom: 8px;

    font-size: 14px;
    line-height: 1.35;
  }

  ${device.desktop} {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const LessonList = styled.ul``;

export const InfoItem = styled.li`
  position: relative;
  font-size: 12px;
  line-height: 1.33;
  color: ${p => p.theme.colors.textSecond};

  :not(:last-of-type) {
    margin-bottom: 4px;
  }

  ${device.tablet} {
    font-size: 14px;
    line-height: 1.35;

    :not(:last-of-type) {
      margin-bottom: 8px;
    }
  }

  ${device.desktop} {
    font-size: 16px;
    line-height: 1.375;

    :not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
`;
