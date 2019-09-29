import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import EditHeader from '../components/edit/EditHeader';
import EditMain from '../components/edit/EditMain';
import EditFooter from '../components/edit/EditFooter';
import { Emoji } from '../types/enums/emoji';
import { Line } from '../types/values/sequencer';
import SelectEmojiModal from '../components/edit/SelectEmojiModal';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    maxHeight: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  header: {
    height: '50px'
  },
  main: {
    flex: 1,
    flexGrow: 1,
    flexBasis: 0,
    overflowY: 'auto'
  },
  footer: {
    height: '100px'
  }
});

const EditPage = () => {
  const [tempo, setTempo] = React.useState(60);
  const [isRepeatOn, setIsRepeatOn] = React.useState(false);
  const [isPlayOn, setIsPlayOn] = React.useState(false);
  const [showSelectEmojiModal, setShowSelectEmojiModal] = React.useState(false);

  const handleClickRepeat = React.useCallback((isOn: boolean) => {
    setIsRepeatOn(isOn);
  }, []);

  const handleClickPlay = React.useCallback((isOn: boolean) => {
    setIsPlayOn(isOn);
  }, []);

  const handleFinishedOnePlay = React.useCallback(() => {
    setIsPlayOn(false);
  }, []);

  const handleChangeTempo = React.useCallback((tempo: number) => {
    setTempo(tempo);
  }, []);

  const handleClickAddSequence = React.useCallback(() => {
    setHideModal(false);
    setShowSelectEmojiModal(true);
  }, []);

  const [hideModal, setHideModal] = React.useState(true);
  const handleExitModal = React.useCallback(() => {
    setHideModal(true);
  }, []);

  const handleHideSelectEmojiModal = React.useCallback(() => {
    setShowSelectEmojiModal(false);
  }, []);

  const [lines, setLines] = React.useState<Line[]>([
    {
      emoji: Emoji.Dog,
      buttonStates: [
        false,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        true,
        false
      ],
      volume: 100,
      playbackRate: 1.0,
      isMute: false
    },
    {
      emoji: Emoji.Sheep,
      buttonStates: [
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false
      ],
      volume: 100,
      playbackRate: 1.0,
      isMute: false
    },
    {
      emoji: Emoji.Egg,
      buttonStates: [
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false
      ],
      volume: 100,
      playbackRate: 1.0,
      isMute: false
    },
    {
      emoji: Emoji.Sushi,
      buttonStates: [
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false
      ],
      volume: 100,
      playbackRate: 2.0,
      isMute: false
    },
    {
      emoji: Emoji.Crap,
      buttonStates: [
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      volume: 100,
      playbackRate: 2.0,
      isMute: false
    },
    {
      emoji: Emoji.Sandwich,
      buttonStates: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      volume: 100,
      playbackRate: 1.0,
      isMute: false
    },
    {
      emoji: Emoji.Elephant,
      buttonStates: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      volume: 100,
      playbackRate: 1.5,
      isMute: false
    },
    {
      emoji: Emoji.Firecracker,
      buttonStates: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      volume: 100,
      playbackRate: 1.5,
      isMute: false
    }
  ]);

  const handleUpdatedLine = React.useCallback((nextLines: Line[]) => {
    setLines(nextLines);
  }, []);

  const handeClickOkSelectedModal = React.useCallback(
    (emoji: Emoji, volume: number, playbackRate: number) => {
      const newSetting: Line = {
        emoji,
        buttonStates: [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        ],
        volume,
        playbackRate,
        isMute: false
      };
      const nextLines = [...lines];
      nextLines.push(newSetting);
      setShowSelectEmojiModal(false);
      setLines(nextLines);
    },
    [lines]
  );

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.header)}>
        <EditHeader />
      </div>
      <div className={css(styles.main)}>
        <EditMain
          tempo={tempo}
          lines={lines}
          isPlayOn={isPlayOn}
          isRepeatOn={isRepeatOn}
          onUpdatedLine={handleUpdatedLine}
          onFinishedOnePlay={handleFinishedOnePlay}
          onClickAddSequence={handleClickAddSequence}
        />
      </div>
      <div className={css(styles.footer)}>
        <EditFooter
          className={css(styles.footer)}
          isRepeatOn={isRepeatOn}
          isPlayOn={isPlayOn}
          tempo={tempo}
          onClickRepeat={handleClickRepeat}
          onClickPlay={handleClickPlay}
          onChangeTempo={handleChangeTempo}
        />
      </div>
      {!hideModal ? (
        <SelectEmojiModal
          show={showSelectEmojiModal}
          onOK={handeClickOkSelectedModal}
          onHide={handleHideSelectEmojiModal}
          onExited={handleExitModal}
        />
      ) : (
        undefined
      )}
    </div>
  );
};

export default EditPage;
