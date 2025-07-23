import React from 'react';
import * as S from './Footer.styles';
import { FaFacebookF as FaFacebookFIcon, FaInstagram as FaInstagramIcon } from 'react-icons/fa';
import type { IconBaseProps } from 'react-icons';
import logo from '../../logo.svg';

const FacebookIcon = FaFacebookFIcon as unknown as React.FC<IconBaseProps>;
const InstagramIcon = FaInstagramIcon as unknown as React.FC<IconBaseProps>;

const Footer: React.FC = () => (
  <S.Wrapper>
    <S.Links>
      <S.Link href="#">Contact</S.Link>
      <S.Link href="#">Privacy</S.Link>
      <S.Link href="#">Terms</S.Link>
    </S.Links>

    <S.SocialLinks>
      <S.IconLink href="https://www.facebook.com/YourPage" target="_blank" aria-label="Facebook">
        <FacebookIcon />
      </S.IconLink>
      <S.IconLink
        href="https://www.instagram.com/YourProfile"
        target="_blank"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </S.IconLink>
    </S.SocialLinks>
    <img src={logo} alt="KK Beauty Lab logo" style={{ width: '40px', marginTop: '1rem' }} />
    <S.Copy>© 2025 KK Beauty Lab. All rights reserved.</S.Copy>
  </S.Wrapper>
);

export default Footer;
