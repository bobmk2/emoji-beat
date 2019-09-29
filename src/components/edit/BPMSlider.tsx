import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import Slider from 'rc-slider';

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  disabled: {
    opacity: 0.5
  },
  text: {
    display: 'flex',
    color: '#FFF'
  },
  bpm: {
    flex: 1,
    textAlign: 'center'
  },
  emoji: {
    fontSize: '20px',
    textShadow:
      'rgb(255, 255, 255) 1px 0px 0px, rgb(255, 255, 255) 0.540302px 0.841471px 0px, rgb(255, 255, 255) -0.416147px 0.909297px 0px, rgb(255, 255, 255) -0.989992px 0.14112px 0px, rgb(255, 255, 255) -0.653644px -0.756802px 0px, rgb(255, 255, 255) 0.283662px -0.958924px 0px, rgb(255, 255, 255) 0.96017px -0.279415px 0px'
  }
});

type PropTypes = {
  className?: string;
  disabled: boolean;
  tempo: number;
  min: number; // default: 60
  max: number; // default: 140
  defaultValue: number;
  labelInterval: number; // default: 20
  onChange: (nextBPM: number) => void;
};

const BPMSlider = (props: PropTypes) => {
  const { className, disabled, tempo, min, max, defaultValue, labelInterval, onChange } = props;

  const marks: { [key: number]: string } = React.useMemo(() => {
    const _m: { [key: number]: string } = {};
    let tmp = min;
    while (tmp <= max) {
      _m[tmp] = `${tmp}`;
      tmp += labelInterval;
    }

    return _m;
  }, [min, max, labelInterval]);

  const _defaultValue = React.useMemo(() => {
    return defaultValue;
  }, [defaultValue]);

  return (
    <div className={[css(styles.slider, disabled ? styles.disabled : undefined), className].join(' ')}>
      <div className={css(styles.text)}>
        <span className={css(styles.emoji)}>🐢</span>
        <span className={css(styles.bpm)}>
          Tempo: <strong>{tempo} BPM</strong>
        </span>
        <span className={css(styles.emoji)}>🐇</span>
      </div>
      <div>
        <Slider
          key={`tempo-${_defaultValue}`}
          disabled={disabled}
          min={min}
          max={max}
          marks={marks}
          defaultValue={_defaultValue}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

BPMSlider.defaultProps = {
  disabled: false
};

export default BPMSlider;
