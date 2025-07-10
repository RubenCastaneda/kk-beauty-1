import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const Content = styled.div`
  background: #fff;
  color: #111;
  width: 90%;
  max-width: 800px;
  padding: 2rem;
  border-radius: 0.5rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 1rem 0.5rem;
    width: 98vw;
    max-width: 98vw;
    min-height: 60vh;
    gap: 0.5rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0.25rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: ${(p) => p.theme.fonts.serif};
`;

export const Description = styled.p`
  flex: 1;
  margin: 1rem 0;
  font-family: ${(p) => p.theme.fonts.sans};
  color: #333;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Button = styled.button`
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.background};
  border: none;
  padding: 0.75rem 1.5rem;
  font-family: ${(p) => p.theme.fonts.serif};
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 0.95rem;
    padding: 0.7rem 0.5rem;
  }
`;
