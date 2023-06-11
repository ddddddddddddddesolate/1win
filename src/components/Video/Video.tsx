import { useCallback, useEffect, useRef, useState } from 'react';

import VideoAsset from 'assets/videos/video.mov';

import styles from './styles.module.scss';

const Video = () => {
  const videoRef = useRef();

  const [muted, setMuted] = useState<boolean>(true);

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
      {/* @ts-ignore */}
      <video ref={videoRef} className={styles.video} autoPlay muted playsInline>
        <source src={VideoAsset} type="video/mp4" />
      </video>

      {muted && (
        <div className={styles.unmute} onClick={unmuteVideo}>Unmute</div>
      )}
    </div>
  );
};

export default Video;
