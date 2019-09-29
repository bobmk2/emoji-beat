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
  volume?: number;
  disabled: boolean;
  onChange: (nextVolume: number) => void;
  onAfterChange?: () => void;
};

const marks = {};

const VolumeSlider = (props: PropTypes) => {
  const { volume, disabled, onChange, onAfterChange } = props;

  const _defaultValue = React.useMemo(() => {
    return volume;
  }, [volume]);

  return (
    <div className={css(styles.slider, disabled ? styles.disabled : undefined)}>
      <Slider
        disabled={disabled}
        min={0}
        max={100}
        marks={marks}
        defaultValue={_defaultValue}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </div>
  );
};

VolumeSlider.defaultProps = {
  disabled: false,
  volume: 100
};

export default VolumeSlider;
