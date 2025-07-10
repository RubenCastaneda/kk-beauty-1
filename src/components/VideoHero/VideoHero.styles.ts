// src/components/VideoHero/VideoHero.styles.ts
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 0;

  @media (max-width: 600px) {
    padding: 0.5rem 0;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 75%;
  max-width: 1200px;
  height: 0;
  padding-top: calc((9 / 16) * 100%); /* 16:9 aspect-ratio */
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 600px) {
    width: 98vw;
    border-radius: 0.7rem;
    box-shadow: 0 0 4px rgba(0,0,0,0.18);
  }
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 600px) {
    border-radius: 0.7rem;
  }
`;
