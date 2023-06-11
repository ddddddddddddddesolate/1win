import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

type Props = {
  onVideoEnded: () => void;
};

const Video = ({ onVideoEnded }: Props) => {
  const videoRef = useRef();

  const [muted, setMuted] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRestartButtonVisible, setIsRestartButtonVisible] = useState<boolean>(false);

  const unmuteVideo = useCallback(() => {
    setMuted(previousState => !previousState);
  }, []);

  const restartVideo = useCallback(() => {
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement)
        .play()
        .catch(console.error);
    }

    setIsRestartButtonVisible(false);
  }, [videoRef]);

  useEffect(() => {
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement).muted = muted;
    }
  }, [videoRef, muted]);

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.loading}>Loading...</div>
      )}

      <div className={styles.overlay}>
        <video
          ref={videoRef as any}
          className={styles.video}
          onLoadedData={() => {
            setIsLoading(false);
          }}
          onEnded={() => {
            onVideoEnded();

            setIsRestartButtonVisible(true);
          }}
          autoPlay
          muted
          playsInline
        >
          <source src={`${process.env.PUBLIC_URL}/videos/video.mp4`} type="video/mp4" />
        </video>

        {isRestartButtonVisible && (
          <div className={styles.restart}>
            <span onClick={restartVideo} className={styles.icon} />
          </div>
        )}

        {(muted && !isRestartButtonVisible) && (
          <div className={styles.unmute} onClick={unmuteVideo}>Unmute</div>
        )}
      </div>
    </div>
  );
};

export default Video;
