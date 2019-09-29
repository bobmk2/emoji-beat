import * as React from 'react';
import SequencerPadToggleButton from './SequencerPadToggleButton';
import { ButtonState } from '../../types/values/sequencer';
import { StyleSheet, css } from 'aphrodite';
import { Emoji } from '../../types/enums/emoji';
import { emojiSetting } from '../../types/values/emoji-setting';

const styles = StyleSheet.create({
  root: {
    height: '90px',
    whiteSpace: 'nowrap'
  },
  mute: {
    opacity: 0.5
  }
});

type PropTypes = {
  index: number;
  emoji: Emoji;
  buttonStates: ButtonState[];
  isMute: boolean;
  onChangeButtonStates: (index: number, nextStates: ButtonState[]) => void;
};

const SequencerLine = (props: PropTypes) => {
  const { index, buttonStates, onChangeButtonStates, emoji, isMute } = props;

  const handleClickButton = React.useCallback(
    (buttonIndex: number, isOn: boolean) => {
      const next = Array.from(buttonStates);
      next[buttonIndex] = isOn;
      onChangeButtonStates(index, next);
    },
    [index, buttonStates, onChangeButtonStates]
  );

  const color = React.useMemo(() => {
    const setting = emojiSetting(emoji);
    return setting ? setting.color : '#111';
  }, [emoji]);

  return (
    <div className={css(styles.root, isMute ? styles.mute : undefined)}>
      {buttonStates.map((state, index) => {
        return (
          <SequencerPadToggleButton
            key={`pad-button_${index}`}
            index={index}
            color={color}
            isOn={state}
            onClick={handleClickButton}
          />
        );
      })}
    </div>
  );
};

export default SequencerLine;
