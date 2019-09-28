/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core';
import { BackgroundColorMain } from '../../types/colors';
import SequencerLine from './SequencerLine';
import { Emoji } from '../../types/enums/emoj';
import { Line, ButtonState } from '../../types/values/sequencer';
import { useState, useCallback, useEffect } from 'react';

const styles = {
  root: {
    backgroundColor: BackgroundColorMain,
    display: 'flex',
    flexDirection: 'column'
  }
};

type PropTypes = {
  _css: SerializedStyles;
  lines: Line[];
};

const EditMain = (props: PropTypes) => {
  // const { lines } = props;

  const [lines, setLines] = useState<Line[]>([
    {
      color: '#FF0000',
      emoji: Emoji.Sushi,
      buttonStates: [false, true, false, false]
    }
  ]);

  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    console.log('date ->', date);
  }, [date]);

  const handleChangeButtonStates = useCallback(
    (lineIndex: number, nextStates: ButtonState[]) => {
      setDate(new Date());
      console.log(lineIndex, nextStates);
      setLines([
        {
          color: '#FF0000',
          emoji: Emoji.Sushi,
          buttonStates: [false, true, false, true]
        }
      ]);
      // const line = lines[lineIndex];
      // const next = { ...line, buttonStates: nextStates };
      // const nextLines = Array.from(lines);
      // nextLines[lineIndex] = next;
      // console.log('nyannyan', lines, nextLines);
      // setLines(nextLines);
    },
    [lines]
  );

  useEffect(() => {
    console.log('changed', lines);
  }, [lines]);

  return (
    /**
    // @ts-ignore */
    <div css={[css(styles.root, props._css)]}>
      {lines.map((line, index) => {
        return (
          <SequencerLine
            key={`line_emoji-${line.emoji}_idx-${index}`}
            index={index}
            color={line.color}
            emoji={line.emoji}
            buttonStates={line.buttonStates}
            onChangeButtonStates={handleChangeButtonStates}
          />
        );
      })}
      <div>aa</div>
      <div>aa</div>
    </div>
  );
};

EditMain.defaultProps = {
  lines: [
    {
      color: '#FF0000',
      emoji: Emoji.Sushi,
      buttonStates: [false, true, false, false]
    }
  ]
};

export default EditMain;
