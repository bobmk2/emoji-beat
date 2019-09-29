import * as React from 'react';
import { Button } from 'react-bootstrap';
import { SIcon, RIcon } from '../common/FontAwesomeIcon';
import { BackgroundColorLight, Border } from '../../types/colors';
import { StyleSheet, css } from 'aphrodite';
import BPMSlider from './BPMSlider';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: BackgroundColorLight,
    borderTop: `2px solid ${Border}`,
    overflowY: 'hidden'
  },
  slider: {
    width: '250px',
    marginLeft: '10px',
    marginBottom: '10px'
  },
  controlPanel: {
    flex: 1,
    height: '100%',
    textAlign: 'center',
    position: 'relative'
  },
  right: {
    width: '250px'
  },
  repeatButton: {
    position: 'absolute',
    left: '30%',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  playButton: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '80px',
    width: '80px',
    borderRadius: '50%'
  }
});

type PropTypes = {
  className?: string;
  style?: React.CSSProperties;
  isRepeatOn: boolean;
  isPlayOn: boolean;
  tempo: number; // BPM
  onClickRepeat: (isOn: boolean) => void;
  onClickPlay: (isOn: boolean) => void;
  onChangeTempo: (nextTempo: number) => void;
};

const EditFooter = (props: PropTypes) => {
  const { tempo, isRepeatOn, isPlayOn, onClickRepeat, onClickPlay, onChangeTempo } = props;

  const handleClickRepeat = React.useCallback(() => {
    onClickRepeat(!isRepeatOn);
  }, [onClickRepeat, isRepeatOn]);

  const handleClickPlay = React.useCallback(() => {
    onClickPlay(!isPlayOn);
  }, [onClickPlay, isPlayOn]);

  const defaultTempo = React.useMemo(() => {
    return tempo;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={[css(styles.root), props.className].join(' ')}>
      <div className={css(styles.slider)}>
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
      <div className={css(styles.controlPanel)}>
        <Button
          className={css(styles.repeatButton)}
          disabled={isPlayOn}
          variant={isRepeatOn ? 'light' : 'outline-light'}
          onClick={handleClickRepeat}
          size='lg'
        >
          {isRepeatOn ? <SIcon name='repeat' padding='none' /> : <RIcon name='repeat' padding='none' />}
        </Button>
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
      <div className={css(styles.right)} />
    </div>
  );
};

export default EditFooter;
