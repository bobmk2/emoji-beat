import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import EditHeader from '../components/edit/EditHeader';
import EditMain from '../components/edit/EditMain';
import EditFooter from '../components/edit/EditFooter';
import { Emoji } from '../types/enums/emoji';
import { Line } from '../types/values/sequencer';
import SelectEmojiModal from '../components/edit/SelectEmojiModal';
import { createSaveData, parseSaveData } from '../utils/savedata-converter';
import ShareModal from '../components/edit/ShareModal';
import * as qs from 'qs';
import useReactRouter from 'use-react-router';
// @ts-ignore
import isEqual from 'lodash/isEqual';
import { saveBeatScore, loadBeatScore } from '../storage/local-storage';

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

const INITIAL_LINES = [
  {
    emoji: Emoji.Crap,
    buttonStates: [
      true,
      true,
      false,
      false,
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
      false
    ],
    volume: 100,
    playbackRate: 1.0,
    isMute: false
  },
  {
    emoji: Emoji.Cat,
    buttonStates: [
      false,
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
    emoji: Emoji.Sandwich,
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
      true,
      false,
      false,
      false
    ],
    volume: 80,
    playbackRate: 1,
    isMute: false
  },
  {
    emoji: Emoji.Dog,
    buttonStates: [
      true,
      true,
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
      true,
      false,
      false,
      false
    ],
    volume: 50,
    playbackRate: 2,
    isMute: true
  }
];
const INITIAL_TEMPO = 60;

const EditPage = () => {
  const [tempo, setTempo] = React.useState(60);
  const [isRepeatOn, setIsRepeatOn] = React.useState(true);
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

  const [lines, setLines] = React.useState<Line[]>([]);

  const handleUpdatedLine = React.useCallback((nextLines: Line[]) => {
    setLines(nextLines);
  }, []);

  const [saveData, setSaveData] = React.useState<undefined | string>(undefined);
  const [showShareModal, setShowShareModal] = React.useState(false);
  const handleHideShareModal = React.useCallback(() => {
    setShowShareModal(false);
  }, []);
  const handleClickShare = React.useCallback(() => {
    const saveData = createSaveData(tempo, lines);

    setSaveData(saveData);
    setShowShareModal(true);
  }, [tempo, lines]);

  const { location, history } = useReactRouter();
  const query = React.useMemo(() => qs.parse(location.search, { ignoreQueryPrefix: true }), [location.search]);

  const [title, composer, isShared, sharedData] = React.useMemo(() => {
    const title = typeof query.title === 'undefined' ? 'Untitled Beat' : query.title;
    const composer = typeof query.composer === 'undefined' ? 'Anonymous' : query.composer;
    const isShared = typeof query.data !== 'undefined';
    const sharedData = isShared ? query.data : undefined;
    return [title, composer, isShared, sharedData];
  }, [query]);

  const [defaultLines, setDefaultLines] = React.useState<Line[]>([]);
  const [defaultTempo, setDefaultTempo] = React.useState(60);

  React.useEffect(() => {
    if (!isShared) {
      const loadedData = loadBeatScore();
      if (typeof loadedData === 'undefined') {
        setTempo(INITIAL_TEMPO);
        setDefaultTempo(INITIAL_TEMPO);
        setLines(INITIAL_LINES);
        setDefaultLines(INITIAL_LINES);
        return;
      }

      const saveData = parseSaveData(loadedData);
      if (typeof saveData === 'undefined') {
        setTempo(INITIAL_TEMPO);
        setDefaultTempo(INITIAL_TEMPO);
        setLines(INITIAL_LINES);
        setDefaultLines(INITIAL_LINES);
        return;
      }

      setTempo(saveData.tempo);
      setDefaultTempo(saveData.tempo);
      setLines(saveData.lines);
      setDefaultLines(saveData.lines);
      return;
    }
    const saveData = parseSaveData(sharedData);
    if (typeof saveData === 'undefined') {
      history.replace('/edit');
      return;
    }
    console.log('tempo ---> ', saveData);

    setTempo(saveData.tempo);
    setDefaultTempo(saveData.tempo);
    setLines(saveData.lines);
    setDefaultLines(saveData.lines);
  }, [isShared, sharedData, history]);

  const [isModifiedBeat, setIsModifiedBeat] = React.useState(false);
  const handleBeforeUnload = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event => {
      const msg = 'Modifid beat score. Are you sure you want to close the page?';
      event.returnValue = msg;
      return msg;
    },
    []
  );

  React.useEffect(() => {
    const same = isEqual(lines, defaultLines) && tempo === defaultTempo;

    setIsModifiedBeat(same);
    if (!same) {
      window.onbeforeunload = handleBeforeUnload;
    } else {
      window.onbeforeunload = null;
    }
    return;
  }, [tempo, defaultTempo, lines, defaultLines, handleBeforeUnload]);

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

  const handleClickSave = React.useCallback(() => {
    const saveData = createSaveData(tempo, lines);
    saveBeatScore(saveData);
    setDefaultLines(lines);
    setDefaultTempo(tempo);
  }, [tempo, lines]);

  const handleClickOpenMyPage = React.useCallback(() => {
    const win = window.open('/edit', '_blank');
    // @ts-ignore
    win.focus();
  }, []);

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.header)}>
        <EditHeader isShared={isShared} title={title} composer={composer} />
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
          isShared={isShared}
          isRepeatOn={isRepeatOn}
          isPlayOn={isPlayOn}
          tempo={tempo}
          onClickRepeat={handleClickRepeat}
          onClickPlay={handleClickPlay}
          onChangeTempo={handleChangeTempo}
          onClickSave={handleClickSave}
          onClickShare={handleClickShare}
          onClickOpenMyPage={handleClickOpenMyPage}
          isModifiedBeat={isModifiedBeat}
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
      <ShareModal show={showShareModal} saveData={saveData} onHide={handleHideShareModal} />
    </div>
  );
};

export default EditPage;
