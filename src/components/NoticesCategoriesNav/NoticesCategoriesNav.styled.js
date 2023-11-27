import styled from '@emotion/styled';

const NavForm = styled.form`
  display: flex;
  column-gap: 12px;
`;

const HiddenRadio = styled.input`
  display: none;
`;

const NavOption = styled.label`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: var(--unnamed, #54adff);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`;

export { NavForm, HiddenRadio, NavOption };
