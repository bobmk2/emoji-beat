import * as React from 'react';
import { BackgroundColorMain, Border } from '../../types/colors';
import SequencerLine from './SequencerLine';
import { Emoji } from '../../types/enums/emoji';
import { Line, ButtonState } from '../../types/values/sequencer';
import { StyleSheet, css } from 'aphrodite';
import Timeline from './Timeline';
import EmojiPanel from './EmojiPanel';
import { usePrevious } from '../../utils/hooks-helper';
import VerticalLine from './VerticalLine';
import EmojiSoundChamber from './EmojiSoundChamber';
import AddSequenceButton from './AddSequenceButton';

const styles = StyleSheet.create({
  root: {
    backgroundColor: BackgroundColorMain,
    display: 'flex',
    height: '100%',
    overflow: 'auto'
  },
  timelineSpacer: {
    width: '100%',
    height: '20px',
    borderRight: `4px solid ${Border}`
  },
  emojiPanels: {
    width: '200px',
    height: '100%',
    position: 'sticky',
    backgroundColor: BackgroundColorMain,
    left: 0,
    zIndex: 1
  },
  sequencerLines: {
    height: '100%',
    backgroundColor: BackgroundColorMain,
    flex: 1,
    position: 'relative'
  },
  sequencerLinesBackground: {
    height: '100%',
    position: 'absolute'
  },
  sequencerLinesFront: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    pointerEvents: 'none'
  },
  frontChild: {
    height: '100%',
    position: 'relative'
  },
  addSequenceButtonArea: {
    backgroundColor: BackgroundColorMain,
    paddingBottom: '10px'
  }
});

type PropTypes = {
  className?: string;
  lines: Line[];
  tempo: number;
  isPlayOn: boolean;
  isRepeatOn: boolean;
  onUpdatedLine: (line: Line[]) => void;
  onFinishedOnePlay: () => void;
  onClickAddSequence: () => void;
};

const EditMain = (props: PropTypes) => {
  const { tempo, lines, isPlayOn, isRepeatOn, onUpdatedLine, onFinishedOnePlay, onClickAddSequence } = props;
  const [onePlayMs, setOnePlayMs] = React.useState<number | undefined>(undefined);

  // TODO: should be set from props
  const [section, setSection] = React.useState(4);

  const prevIsPlayOn = usePrevious<boolean>(isPlayOn);
  React.useEffect(() => {
    if (!prevIsPlayOn && isPlayOn) {
      // console.log('play start!');
      const perSec = 60 / tempo;
      const onePlayMs = perSec * section * 1000;

      setOnePlayMs(onePlayMs);
    } else if (prevIsPlayOn && !isPlayOn) {
      setOnePlayMs(undefined);
    }
  }, [prevIsPlayOn, isPlayOn, tempo, section]);

  React.useEffect(() => {
    if (typeof onePlayMs === 'undefined') {
      return;
    }
    let startedAt = new Date().getTime();

    const interval = onePlayMs / (section * 4);

    let current = -1;
    const tid = window.setInterval(() => {
      const now = new Date().getTime();
      const elapsedMs = now - startedAt;
      const soundIndex = Math.floor(elapsedMs / interval);

      if (soundIndex >= section * 4) {
        if (isRepeatOn) {
          startedAt = new Date().getTime();
        } else {
          window.clearInterval(tid);
          onFinishedOnePlay();
        }
        return;
      }
      if (soundIndex !== current) {
        setSoundIndex(soundIndex);
        current = soundIndex;
      }
    }, 10);

    return () => {
      window.clearTimeout(tid);
    };
  }, [section, onePlayMs, isRepeatOn, onFinishedOnePlay]);

  const timelineRef = React.useRef<HTMLDivElement>(null);

  const handleChangeButtonStates = React.useCallback(
    (lineIndex: number, nextStates: ButtonState[]) => {
      const line = lines[lineIndex];
      const next = { ...line, buttonStates: nextStates };
      const nextLines = Array.from(lines);
      nextLines[lineIndex] = next;
      onUpdatedLine(nextLines);
    },
    [lines, onUpdatedLine]
  );

  const [soundIndex, setSoundIndex] = React.useState<number | undefined>(undefined);

  const handleClickMute = React.useCallback(
    (lineIndex: number, isMute: boolean) => {
      const line = lines[lineIndex];
      const next = { ...line, isMute };
      const nextLines = Array.from(lines);
      nextLines[lineIndex] = next;
      onUpdatedLine(nextLines);
    },
    [lines, onUpdatedLine]
  );

  const handleClickDelete = React.useCallback(
    (lineIndex: number) => {
      const nextLines = Array.from(lines);
      nextLines.splice(lineIndex, 1);
      onUpdatedLine(nextLines);
    },
    [lines, onUpdatedLine]
  );

  const handleChangeSettingLine = React.useCallback(
    (index: number, emoji: Emoji, volume: number, playbackRate: number) => {
      const nextLines = Array.from(lines);
      nextLines[index] = { ...lines[index], emoji, volume, playbackRate };
      onUpdatedLine(nextLines);
    },
    [lines, onUpdatedLine]
  );

  return (
    <div className={[css(styles.root), props.className].join(' ')}>
      <div className={css(styles.emojiPanels)}>
        <div className={css(styles.timelineSpacer)} />
        {lines.map((line, index) => {
          return (
            <EmojiPanel
              key={`emoji_panel-${line.emoji}_idx-${index}`}
              index={index}
              emoji={line.emoji}
              isMute={line.isMute}
              volume={line.volume}
              playbackRate={line.playbackRate}
              onClickMute={handleClickMute}
              onDelete={handleClickDelete}
              onChangeSetting={handleChangeSettingLine}
            />
          );
        })}
        <div className={css(styles.addSequenceButtonArea)}>
          <AddSequenceButton onClick={onClickAddSequence} />
        </div>
      </div>
      {lines.map((line, index) => {
        return (
          <EmojiSoundChamber
            key={`emoji_sound-${line.emoji}-${index}`}
            isPlayOn={isPlayOn}
            soundIndex={soundIndex}
            emoji={line.emoji}
            buttonStates={line.buttonStates}
            volume={line.volume}
            playbackRate={line.playbackRate}
            isMute={line.isMute}
          />
        );
      })}
      <div className={css(styles.sequencerLines)}>
        <div className={css(styles.sequencerLinesBackground)}>
          <Timeline ref={timelineRef} />
          {lines.map((line, index) => {
            return (
              <SequencerLine
                key={`sequencer-line_idx-${index}`}
                index={index}
                emoji={line.emoji}
                buttonStates={line.buttonStates}
                onChangeButtonStates={handleChangeButtonStates}
                isMute={line.isMute}
              />
            );
          })}
        </div>
        <div className={css(styles.sequencerLinesFront)}>
          <div
            className={css(styles.frontChild)}
            style={{ width: timelineRef.current ? timelineRef.current.getBoundingClientRect().width : undefined }}
          >
            {/* TODO: modify style css, this is so terrible. */}
            <VerticalLine
              style={{ minHeight: `${lines.length * 90 + 20 + 60}px` }}
              onePlayMs={onePlayMs}
              isRepeatOn={isRepeatOn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMain;
