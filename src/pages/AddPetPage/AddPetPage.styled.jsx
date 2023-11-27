import styled from 'styled-components';

export const MainBox = styled.div`
  background-color: white;
  width: 280px;
  flex-shrink: 0;
  align-items: center;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 8px;
  padding-top: 20px;
  margin: 0 auto;
`;

export const MainText = styled.h1`
  color: var(--black, #111);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
`;

export const ListLines = styled.ul`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;
export const ItemLines = styled.li`
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${(props) => props.color};

  & > * {
    background-color: ${(props) => props.color};
  }
`;

export const SpanLine = styled.span`
  display: block;
  width: 80px;
  height: 8px;
  border-radius: 8px;

  margin-top: 12px;
`;

export const MainForm = styled.form`
  display: flex;
  margin-bottom: 91px;
`;
export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ChekText = styled.label`
  border-radius: 40px;
  color: #54adff;
  background: var(--blue-light, #cce4fb);
  width: fit-content;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  padding: 8px 16px;
  user-select: none;
`;
export const CheckBox = styled.input`
  display: none;
  opacity: 0;
  &:checked {
    & + label {
      color: white;
      background-color: #54adff;
    }
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NextBtn = styled.button`
  background: var(--blue-links, #54adff);
  color: white;
  border-radius: 40px;
  border: none;
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const BackBtn = styled.button`
  background: var(--blue-links, #ffffff);
  color: #54adff;
  border-radius: 40px;
  border: none;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
