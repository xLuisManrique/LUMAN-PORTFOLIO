import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+33 6 02 48 10 20">+33 6 02 48 10 20</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:luisito_099@hotmail.com">
            Luisito_099@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>LUMAN Developer Full Stack</Slogan>
        </CompanyContainer>
        <SocialContainer>

        <SocialIcons href="https://github.com/xluismanrique">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://youtube.com/@Soyluismanrique">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/soyluismanrique/">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>

        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
