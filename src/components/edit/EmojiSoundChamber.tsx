import * as React from 'react';
import { Emoji } from '../../types/enums/emoji';
import { ButtonState } from '../../types/values/sequencer';
import SoundChamber from './SoundChamber';
import { emojiSetting } from '../../types/values/emoji-setting';

type PropTypes = {
  emoji: Emoji;
  isPlayOn: boolean;
  soundIndex?: number;
  volume?: number;
  playbackRate?: number;
  buttonStates: ButtonState[];
  isMute: boolean;
};

const EmojiSoundChamber = (props: PropTypes) => {
  const { emoji, isPlayOn, soundIndex, volume, playbackRate, buttonStates, isMute } = props;

  const url = React.useMemo(() => {
    const setting = emojiSetting(emoji);
    return setting ? `/se/${setting.sound}` : '';
  }, [emoji]);

  const _soundIndex = React.useMemo(() => {
    if (typeof soundIndex === 'undefined') {
      // console.log('none');
      return undefined;
    }
    // console.log('sound -> ' + buttonStates[soundIndex] ? soundIndex : undefined);

    return buttonStates[soundIndex] ? soundIndex : undefined;
  }, [soundIndex, buttonStates]);

  return (
    <SoundChamber
      url={url}
      isPlayOn={isPlayOn}
      soundIndex={_soundIndex}
      playbackRate={playbackRate}
      isMute={isMute}
      volume={volume}
    />
  );
};

export default EmojiSoundChamber;
