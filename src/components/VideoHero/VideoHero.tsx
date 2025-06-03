// src/components/VideoHero/VideoHero.tsx
import React from 'react';
import * as S from './VideoHero.styles';

// If you later bundle from `src/assets/videos`, you could instead do:
// import heroVideo from '../../assets/videos/hero.mp4';

const VideoHero: React.FC = () => (
  <S.Wrapper>
    <S.Container>
      <S.Video
        src="/videos/hero.mp4" // <-- path under public/videos/
        muted
        loop
        autoPlay
        playsInline
      />
    </S.Container>
  </S.Wrapper>
);

export default VideoHero;
