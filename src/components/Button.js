import React from 'react';
import styled from 'styled-components';

const ColoredButton = styled.button`
  width: 150px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 8px;
  font-size: 18px;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const Button = ({ children, ...rest }) => {
  return <ColoredButton {...rest}>{children}</ColoredButton>;
};

export default Button;
