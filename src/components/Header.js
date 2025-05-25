import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 30px 0;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #3498db;
  margin-bottom: 15px;
`;

const PrintButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  @media print {
    display: none;
  }
`;

function Header() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <HeaderContainer>
      <Name>Your Name</Name>
      <Title>Professional Title</Title>
      <PrintButton onClick={handlePrint}>🖨️</PrintButton>
    </HeaderContainer>
  );
}

export default Header;