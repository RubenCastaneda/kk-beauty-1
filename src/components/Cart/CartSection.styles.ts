import styled from 'styled-components';

export const Section = styled.section`
  width: 75%;
  max-width: 1200px;
  margin: 2.5rem auto 0 auto;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0.1rem;
  background: #181818;
  color: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    width: 98vw;
    padding: 2rem 0.5rem;
    margin: 1.5rem auto 0 auto;
    border-radius: 0.5rem;
  }
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.5rem;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Paragraph = styled.p`
  max-width: 700px;
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 auto;
  color: #eee;
`;
