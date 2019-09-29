import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import Slider from 'rc-slider';

const styles = StyleSheet.create({
  slider: {
    minWidth: '200px'
  },
  disabled: {
    opacity: 0.5
  }
});

type PropTypes = {
  playbackRate?: number;
  disabled: boolean;
  onChange: (nextVolume: number) => void;
  onAfterChange?: (volume: number) => void;
};

const marks = {
  0.5: 'x0.5',
  1.0: 'x1',
  2.0: 'x2',
  3.0: 'x3',
  4.0: 'x4'
};

const PlaybackSpeedSlider = (props: PropTypes) => {
  const { playbackRate, disabled, onChange, onAfterChange } = props;

  const _defaultValue = React.useMemo(() => {
    return playbackRate;
  }, [playbackRate]);

  return (
    <div className={css(styles.slider, disabled ? styles.disabled : undefined)}>
      <Slider
        disabled={disabled}
        min={0.5}
        max={4}
        step={0.1}
        marks={marks}
        defaultValue={_defaultValue}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </div>
  );
};

PlaybackSpeedSlider.defaultProps = {
  disabled: false,
  playbackRate: 1.0
};

export default PlaybackSpeedSlider;
