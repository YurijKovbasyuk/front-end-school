import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Card = styled.li`
  padding: 12px 10px;

  background-color: ${p => p.theme.colors.bgMain};
  border-radius: 20px;
  box-shadow: 7px 4px 14px ${p => p.theme.colors.shadow};

  transition: box-shadow ${p => p.theme.animation.cubicBezier};

  :hover,
  :focus {
    box-shadow: 14px 10px 14px ${p => p.theme.colors.shadow};
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

export const CourseTitle = styled.h2`
  margin-bottom: 12px;

  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  text-align: center;
  text-decoration-line: underline;
  color: ${p => p.theme.colors.textLink};

  transition: color ${p => p.theme.animation.cubicBezier};

  :hover,
  :focus {
    color: ${p => p.theme.colors.hover};
  }

  ${device.tablet} {
    min-height: 44px;
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 1.375;
  }

  ${device.desktop} {
    min-height: 54px;

    font-size: 20px;
    line-height: 1.35;
  }
`;

export const CourseWrapper = styled.div`
  display: box;
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
export const CourseDescription = styled.h3`
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

export const SubjectItem = styled.p`
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

export const SkillsList = styled.ul``;

export const InfoItem = styled.li`
  margin-left: 12px;
  position: relative;
  font-size: 12px;
  line-height: 1.33;
  color: ${p => p.theme.colors.textSecond};

  :not(:last-of-type) {
    margin-bottom: 4px;
  }

  ${device.tablet} {
    margin-left: 14px;
    font-size: 14px;
    line-height: 1.35;

    :not(:last-of-type) {
      margin-bottom: 8px;
    }
  }

  ${device.desktop} {
    margin-left: 16px;
    font-size: 16px;
    line-height: 1.375;

    :not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
`;
