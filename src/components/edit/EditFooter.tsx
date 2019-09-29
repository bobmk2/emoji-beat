import * as React from 'react';
import { Button } from 'react-bootstrap';
import { SIcon, RIcon } from '../common/FontAwesomeIcon';
import { BackgroundColorLight, Border } from '../../types/colors';
import { StyleSheet, css } from 'aphrodite';
import BPMSlider from './BPMSlider';
import SaveButton from '../common/SaveButton';
import ShareButton from '../common/ShareButton';
import OpenMyPageButton from '../common/OpenMyPageButton';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: BackgroundColorLight,
    overflowY: 'hidden'
  },
  slider: {
    width: '370px',
    marginLeft: '10px',
    marginBottom: '10px'
  },
  sliderChild: {
    width: '300px'
  },
  controlPanel: {
    flex: 1,
    height: '100%',
    minWidth: '100px',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  },
  right: {
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '370px',
    whiteSpace: 'nowrap'
  },
  repeatButtonArea: {
    width: '50px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  },
  right2: {
    width: '50px'
  },
  repeatButton: {},
  playButton: {
    height: '80px',
    width: '80px',
    borderRadius: '50%'
  },
  openMyPageButton: {
    marginRight: '10px'
  },
  saveButton: {
    marginRight: '10px'
  },
  savedMessageArea: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px'
  },
  savedMessage: {
    whiteSpace: 'nowrap',
    color: '#28a745',
    fontSize: '20px',
    fontWeight: 700
  }
});

type PropTypes = {
  className?: string;
  style?: React.CSSProperties;
  isRepeatOn: boolean;
  isPlayOn: boolean;
  tempo: number; // BPM
  isModifiedBeat: boolean;
  isShared: boolean;
  onClickRepeat: (isOn: boolean) => void;
  onClickPlay: (isOn: boolean) => void;
  onChangeTempo: (nextTempo: number) => void;
  onClickSave: () => void;
  onClickShare: () => void;
  onClickOpenMyPage: () => void;
};

const EditFooter = (props: PropTypes) => {
  const {
    tempo,
    isModifiedBeat,
    isShared,
    isRepeatOn,
    isPlayOn,
    onClickRepeat,
    onClickPlay,
    onChangeTempo,
    onClickShare,
    onClickSave,
    onClickOpenMyPage
  } = props;

  const [showSavedMessage, setShowSavedMessage] = React.useState(false);

  const handleClickRepeat = React.useCallback(() => {
    onClickRepeat(!isRepeatOn);
  }, [onClickRepeat, isRepeatOn]);

  const handleClickPlay = React.useCallback(() => {
    onClickPlay(!isPlayOn);
  }, [onClickPlay, isPlayOn]);

  const defaultTempo = React.useMemo(() => {
    return tempo;
  }, [tempo]);

  const handleClickSave = React.useCallback(() => {
    setShowSavedMessage(true);
    onClickSave();
  }, [onClickSave]);

  React.useEffect(() => {
    if (showSavedMessage) {
      const tid = window.setTimeout(() => {
        setShowSavedMessage(false);
      }, 3000);

      return () => {
        window.clearTimeout(tid);
      };
    }
    return;
  }, [showSavedMessage]);

  return (
    <div className={[css(styles.root), props.className].join(' ')}>
      <div className={css(styles.slider)}>
        <div className={css(styles.sliderChild)}>
          <BPMSlider
            disabled={isPlayOn}
            tempo={tempo}
            min={40}
            max={120}
            labelInterval={10}
            defaultValue={defaultTempo}
            onChange={onChangeTempo}
          />
        </div>
      </div>
      <div className={css(styles.repeatButtonArea)}>
        <Button
          className={css(styles.repeatButton)}
          disabled={isPlayOn}
          variant={isRepeatOn ? 'light' : 'outline-secondary'}
          onClick={handleClickRepeat}
          size='lg'
        >
          {isRepeatOn ? <SIcon name='repeat' padding='none' /> : <RIcon name='repeat' padding='none' />}
        </Button>
      </div>
      <div className={css(styles.controlPanel)}>
        <Button
          className={css(styles.playButton)}
          variant={isPlayOn ? 'primary' : 'outline-primary'}
          size='lg'
          onClick={handleClickPlay}
        >
          {isPlayOn ? <SIcon name='stop' padding='none' /> : <RIcon name='play' padding='none' />}
        </Button>
      </div>
      {/* Empty space */}
      <div className={css(styles.right2)} />
      <div className={css(styles.right)}>
        {showSavedMessage ? (
          <div className={css(styles.savedMessageArea)}>
            <span className={css(styles.savedMessage)}>
              <RIcon name='check' padding='right' />
              Saved
            </span>
          </div>
        ) : (
          undefined
        )}
        {isShared ? (
          <OpenMyPageButton className={css(styles.openMyPageButton)} onClick={onClickOpenMyPage} />
        ) : (
          <SaveButton disabled={isModifiedBeat} className={css(styles.saveButton)} onClick={handleClickSave} />
        )}
        <ShareButton onClick={onClickShare} />
      </div>
    </div>
  );
};

export default EditFooter;
