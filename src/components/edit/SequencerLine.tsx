import * as React from 'react';
import SequencerPadToggleButton from './SequencerPadToggleButton';
import { ButtonState } from '../../types/values/sequencer';
import { StyleSheet, css } from 'aphrodite';
import { Emoji } from '../../types/enums/emoji';
import { emojiSetting } from '../../types/values/emoji-setting';

const styles = StyleSheet.create({
  root: {
    height: '100px'
  }
});

type PropTypes = {
  index: number;
  emoji: Emoji;
  buttonStates: ButtonState[];
  onChangeButtonStates: (index: number, nextStates: ButtonState[]) => void;
};

const SequencerLine = (props: PropTypes) => {
  const { index, buttonStates, onChangeButtonStates, emoji } = props;

  const handleClickButton = React.useCallback(
    (buttonIndex: number, isOn: boolean) => {
      const next = Array.from(buttonStates);
      next[buttonIndex] = isOn;
      console.log('nyan', buttonStates, next);
      onChangeButtonStates(index, next);
    },
    [index, buttonStates, onChangeButtonStates]
  );

  const color = React.useMemo(() => {
    const setting = emojiSetting(emoji);
    return setting ? setting.color : '#111';
  }, [emoji]);

  return (
    <div className={css(styles.root)}>
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
