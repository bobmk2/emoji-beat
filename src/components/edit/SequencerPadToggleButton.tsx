import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    height: '90px',
    width: '90px',
    display: 'inline-block',
    position: 'relative'
  },
  veil: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  veilOn: {
    backgroundColor: '#FFF',
    opacity: 0.2,
    [':hover']: {
      opacity: 0.5
    },
    [':active']: {
      opacity: 0.7
    }
  },
  veilOff: {
    backgroundColor: '#000',
    opacity: 0.6,
    [':hover']: {
      opacity: 0.5
    },
    [':active']: {
      opacity: 0.3
    }
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    border: '1px solid #000'
  }
});

type PropTypes = {
  index: number;
  isOn: boolean;
  color: RgbColor;
  onClick: (index: number, isOn: boolean) => void;
};

const SequencerPadToggleButton = (props: PropTypes) => {
  const { index, isOn, onClick } = props;

  const handleClick = React.useCallback(() => {
    onClick(index, !isOn);
  }, [index, isOn, onClick]);

  return (
    <div className={css(styles.root)} onClick={handleClick}>
      <div className={css(styles.background)} style={{ backgroundColor: props.color }} />
      <div className={css(styles.veil, props.isOn ? styles.veilOn : styles.veilOff)} />
    </div>
  );
};

export default SequencerPadToggleButton;
