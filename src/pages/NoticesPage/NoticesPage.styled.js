import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../utils/theme';
const { fonts, fontSizes, fontWeights, colors } = theme;

const Header = styled.h3`
  margin-top: 90px;
  color: #111;
  font-family: ${fonts.bold}, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: ${fontWeights.bold};
  text-align: center;
  line-height: normal;
`;

const NoticePageContrtols = styled.div`
  margin-bottom: 42px;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;

const NoticePageContrtolsRight = styled.div`
  display: flex;
  column-gap: 16px;
  z-index: 1;
`;

const AddPetLink = styled(NavLink)`
  display: flex;
  width: 129px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: ${colors.blue};

  color: #fef9f9;
  font-family: ${fonts.bold}, sans-serif;
  font-size: ${fontSizes.m};
  font-style: normal;
  font-weight: ${fontWeights.bold};
  line-height: normal;
  letter-spacing: 0.64px;
`;

export { Header, NoticePageContrtols, NoticePageContrtolsRight, AddPetLink };
