import * as React from 'react';
import { usePrevious } from '../../utils/hooks-helper';
import ReactSound from 'react-sound';

type PropTypes = {
  url: string;
  isPlayOn: boolean;
  soundIndex?: number;
  playbackRate?: number;
  volume?: number;
  isMute: boolean;
};

type SoundBullet = {
  status: ReactSound.PlayStatus;
  index: number;
  invokedAt: number;
};

const SoundChamber = (props: PropTypes) => {
  const { url, isPlayOn, soundIndex, playbackRate, volume, isMute } = props;
  const [soundChamber, setSoundChamber] = React.useState<SoundBullet[]>([]);

  const prevSoundIndex = usePrevious<number | undefined>(soundIndex);

  const handleFinishedPlaying = React.useCallback(
    (index: number) => {
      const nextChamber = [...soundChamber];
      nextChamber[index] = { ...nextChamber[index], status: 'STOPPED' };
      setSoundChamber(nextChamber);
    },
    [soundChamber]
  );

  const prevIsPlayOn = usePrevious(isPlayOn);
  const prevIsMute = usePrevious(isMute);
  React.useEffect(() => {
    if ((prevIsPlayOn && !isPlayOn) || (prevIsMute && !isMute)) {
      // すべて止める
      const nextChamber: SoundBullet[] = soundChamber.map(s => {
        return { ...s, status: 'STOPPED' };
      });
      setSoundChamber(nextChamber);
    }
  }, [prevIsPlayOn, soundChamber, isPlayOn, prevIsMute, isMute]);

  React.useEffect(() => {
    if (prevSoundIndex !== soundIndex && typeof soundIndex !== 'undefined' && !isMute) {
      // チャンバーに空きがあるか確認
      const emptySoundBulletIndex = soundChamber.findIndex(s => s.status === 'STOPPED');
      // 無いのなら弾を込める
      const nextChamber: SoundBullet[] = [...soundChamber];
      if (emptySoundBulletIndex === -1) {
        // console.log('create new bullet next size -> ', nextChamber.length + 1);
        nextChamber.push({
          status: 'PLAYING',
          index: soundIndex,
          invokedAt: new Date().getTime()
        });
      } else {
        // あるのならそいつを置換する
        // console.log('use empty ', emptySoundBulletIndex);
        nextChamber[emptySoundBulletIndex] = {
          status: 'PLAYING',
          index: soundIndex,
          invokedAt: new Date().getTime()
        };
      }
      setSoundChamber(nextChamber);
    }
  }, [soundIndex, soundChamber, prevSoundIndex, isMute]);

  return (
    <>
      {soundChamber.map((bullet, index) => {
        return (
          <ReactSoundRapper
            index={index}
            key={`sound-bullet-${bullet.index}-${bullet.invokedAt}`}
            url={url}
            playStatus={bullet.status}
            onFinishedPlaying={handleFinishedPlaying}
            playbackRate={playbackRate}
            volume={volume}
          />
        );
      })}
    </>
  );
};

type ReactSoundRapper = {
  index: number;
  url: string;
  playStatus: ReactSound.PlayStatus;
  playbackRate?: number;
  volume?: number;
  onFinishedPlaying: (index: number) => void;
};

const ReactSoundRapper = (props: ReactSoundRapper) => {
  const { index, url, playStatus, onFinishedPlaying, playbackRate, volume } = props;

  const handleFinishedPlaying = React.useCallback(() => {
    onFinishedPlaying(index);
  }, [onFinishedPlaying, index]);

  return (
    <ReactSound
      url={url}
      playStatus={playStatus}
      onFinishedPlaying={handleFinishedPlaying}
      playbackRate={playbackRate}
      volume={volume}
    />
  );
};

export default SoundChamber;
