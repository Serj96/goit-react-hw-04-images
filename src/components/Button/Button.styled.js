import styled from '@emotion/styled';

export const ButtonLoad = styled.button`
  position: relative;
  width: 20%;
  background-color: #6679dd;
  color: white;
  padding: 14px 20px;
  margin: 8px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  &:hover {
    cursor: pointer;
    background-color: #4959b0;
  }

  &:focus {
    box-shadow: rgba(46, 95, 164, 0.4) 0 0 0 3px;
    outline: none;
  }

  &:active {
    background-color: #4d68eb;
    box-shadow: rgba(77, 104, 235, 0.2) 0 1px 0 inset;
  }
`;
