import styled from 'styled-components';

export const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${(p) => p.theme.fonts.serif};
  z-index: 1000;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Links = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const Link = styled.a`
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const IconLink = styled.a`
  color: ${(p) => p.theme.colors.text};
  font-size: 1.25rem;
  transition: color 0.2s;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const Copy = styled.div`
  font-size: 0.85rem;
`;
