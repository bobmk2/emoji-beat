/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useCallback } from 'react';

const styles = {
  root: {
    height: '100px',
    width: '100px',
    borderRadius: '10px',
    [':active']: {
      backgroundColor: '#00FFAA'
    }
  },
  on: {
    backgroundColor: '#FFF',
    opacity: 0.3,
    ':hover': {
      opacity: 0.5
    },
    ':active': {
      opactiy: 0.7
    }
  },
  off: {
    backgroundColor: '#000',
    opacity: 0.7,
    ':hover': {
      opacity: 0.5
    },
    ':active': {
      opactiy: 0.3
    }
  },
  background: {
    height: '100%',
    width: '100%',
    border: '1px solid #000',
    borderRadius: '10px'
  }
};

type PropTypes = {
  index: number;
  isOn: boolean;
  color: RgbColor;
  onClick: (index: number, isOn: boolean) => void;
};

const SequencerPadToggleButton = (props: PropTypes) => {
  const { index, isOn, onClick } = props;

  const handleClick = useCallback(() => {
    onClick(index, !isOn);
  }, [index, isOn, onClick]);

  return (
    <div css={css(styles.root)} style={{ backgroundColor: props.color }} onClick={handleClick}>
      <div css={css(styles.background, props.isOn ? styles.on : styles.off)} />
    </div>
  );
};

export default SequencerPadToggleButton;
