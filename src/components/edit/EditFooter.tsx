import * as React from 'react';
import { Button } from 'react-bootstrap';
import { SIcon, RIcon } from '../common/FontAwesomeIcon';
import { BackgroundColorLight, Border } from '../../types/colors';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: BackgroundColorLight,
    borderTop: `2px solid ${Border}`
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
};

const EditFooter = (props: PropTypes) => {
  const { tempo, isRepeatOn, isPlayOn, onClickRepeat, onClickPlay } = props;

  const handleClickRepeat = React.useCallback(() => {
    onClickRepeat(!isRepeatOn);
  }, [onClickRepeat, isRepeatOn]);

  const handleClickPlay = React.useCallback(() => {
    onClickPlay(!isPlayOn);
  }, [onClickPlay, isPlayOn]);

  return (
    <div className={[css(styles.root), props.className].join(' ')}>
      <div>
        <Button disabled={isPlayOn} variant={isRepeatOn ? 'light' : 'outline-light'} onClick={handleClickRepeat}>
          {isRepeatOn ? <SIcon name='repeat' padding='none' /> : <RIcon name='repeat' padding='none' />}
        </Button>
        <Button variant={isPlayOn ? 'primary' : 'outline-primary'} size='lg' onClick={handleClickPlay}>
          {isPlayOn ? <SIcon name='stop' padding='none' /> : <RIcon name='play' padding='none' />}
        </Button>
        Tempo: {tempo}BPM
      </div>
    </div>
  );
};

export default EditFooter;
