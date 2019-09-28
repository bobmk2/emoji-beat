/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import SequencerPadToggleButton from './SequencerPadToggleButton';
import EmojiIcon from '../common/EmojiIcon';
import { Emoji } from '../../types/enums/emoj';
import { useCallback } from 'react';
import { ButtonState } from '../../types/values/sequencer';

const styles = {
  root: {
    display: 'flex',
    height: '100px'
  }
};

type PropTypes = {
  index: number;
  emoji: Emoji;
  color: RgbColor;
  buttonStates: ButtonState[];
  onChangeButtonStates: (index: number, nextStates: ButtonState[]) => void;
};

const SequencerLine = (props: PropTypes) => {
  const { index, buttonStates, onChangeButtonStates } = props;

  const handleClickButton = useCallback(
    (buttonIndex: number, isOn: boolean) => {
      const next = Array.from(buttonStates);
      next[buttonIndex] = isOn;
      console.log('nyan', buttonStates, next);
      onChangeButtonStates(index, next);
    },
    [index, buttonStates, onChangeButtonStates]
  );

  return (
    <div css={css(styles.root)}>
      <EmojiIcon name={props.emoji} />
      {buttonStates.map((state, index) => {
        return (
          <SequencerPadToggleButton
            key={`pad-button_${index}`}
            index={index}
            color={props.color}
            isOn={state}
            onClick={handleClickButton}
          />
        );
      })}
    </div>
  );
};

export default SequencerLine;
