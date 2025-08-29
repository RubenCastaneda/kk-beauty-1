// src/components/VideoHero/VideoHero.tsx
import React, { useRef, useEffect } from 'react';
import * as S from './VideoHero.styles';

const VideoHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // set default volume to 50%
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Video
          ref={videoRef}
          src="/videos/hero.mp4" // path under public/videos/
          loop
          autoPlay
          playsInline
          controls // show browser controls for play/pause/volume
        />
      </S.Container>
    </S.Wrapper>
  );
};

export default VideoHero;
