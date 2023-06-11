import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

const Video = () => {
  const videoRef = useRef();

  const [muted, setMuted] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const unmuteVideo = useCallback(() => {
    setMuted(previousState => !previousState);
  }, [videoRef, muted]);

  useEffect(() => {
    if (videoRef.current) {
      (videoRef.current as  HTMLVideoElement).muted = muted;
    }
  }, [videoRef, muted]);

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.loading}>Loading...</div>
      )}

      <video
        ref={videoRef as any}
        className={styles.video}
        onLoadedData={() => {
          setIsLoading(false);
        }}
        autoPlay
        muted
        playsInline
      >
        <source src={`${process.env.PUBLIC_URL}/videos/video.mov`} type="video/mp4" />
      </video>

      {muted && (
        <div className={styles.unmute} onClick={unmuteVideo}>Unmute</div>
      )}
    </div>
  );
};

export default Video;
