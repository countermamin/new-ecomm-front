import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Center from './Center';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  margin-top: 26px;
  ${props => props.bottom && `
      position: fixed;
      bottom: 0;
      width: 100%;
  `
  }
`;

const FooterInfo = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 0;
`;

const FooterLink = styled.li`
  margin: 0 10px;
  font-size: 16px;
`;

const StyledText = styled.p`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #888;
  }
`;

const AdaptiveFooter = (props) => {
  return (
    <FooterContainer bottom={props.bottom}>
      <Center>
        <FooterInfo>
          <div>
            <h4>Контактная информация</h4>
            <StyledText>+7 777 777 77 77</StyledText>
            <StyledText>orzu.maminov9@gmail.com</StyledText>
          </div>
          <div>
            <h4>© 2023 Все права защищены</h4>
          </div>
        </FooterInfo>
      </Center>
    </FooterContainer>
  );
};

export default AdaptiveFooter;