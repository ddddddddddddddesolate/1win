import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

type Props = {
  onVideoEnded: () => void;
};

const Video = ({ onVideoEnded }: Props) => {
  const videoRef = useRef();

  const [muted, setMuted] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVideoEnded, setIsVideoEnded] = useState<boolean>(false);

  const unmuteVideo = useCallback(() => {
    setMuted(previousState => !previousState);
  }, []);

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

      {isVideoEnded ? (
        <img
          src={`${process.env.PUBLIC_URL}/images/gif.gif`}
          className={styles.gif}
          alt="1win"
        />
      ) : (
        <>
          <video
            ref={videoRef as any}
            className={styles.video}
            onLoadedData={() => {
              setIsLoading(false);
            }}
            onEnded={() => {
              onVideoEnded();

              setIsVideoEnded(true);
            }}
            autoPlay
            muted
            playsInline
          >
            <source src={`${process.env.PUBLIC_URL}/videos/video.mp4`} type="video/mp4" />
          </video>

          {(muted && !isVideoEnded) && (
            <div className={styles.unmute} onClick={unmuteVideo}>Unmute</div>
          )}
        </>
      )}
    </div>
  );
};

export default Video;
