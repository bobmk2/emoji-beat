import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { BackgroundColorMain } from '../../types/colors';

const styles = StyleSheet.create({
  timeline: {
    height: '20px',
    width: '100%',
    absolute: 'relative',
    backgroundColor: BackgroundColorMain
  },
  miniSeparate: {
    position: 'absolute',
    width: '2px',
    height: '10px',
    backgroundColor: '#999',
    transform: 'translateX(-50%)'
  },
  separate: {
    position: 'absolute',
    width: '6px',
    height: '20px',
    backgroundColor: '#AAA',
    transform: 'translateX(-50%)'
  },
  first: {
    left: '25%'
  },
  second: {
    left: '50%'
  },
  third: {
    left: '75%'
  }
});

type PropTypes = {
  className?: string;
  style?: React.CSSProperties;
};

const MINI_SEPARATE_INTERVAL = 6.25;

const MINI_SEPARATE_LEFTS = [
  MINI_SEPARATE_INTERVAL,
  MINI_SEPARATE_INTERVAL * 2,
  MINI_SEPARATE_INTERVAL * 3,
  MINI_SEPARATE_INTERVAL * 5,
  MINI_SEPARATE_INTERVAL * 6,
  MINI_SEPARATE_INTERVAL * 7,
  MINI_SEPARATE_INTERVAL * 9,
  MINI_SEPARATE_INTERVAL * 10,
  MINI_SEPARATE_INTERVAL * 11,
  MINI_SEPARATE_INTERVAL * 13,
  MINI_SEPARATE_INTERVAL * 14,
  MINI_SEPARATE_INTERVAL * 15
];

const Timeline = React.forwardRef((props: PropTypes, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div ref={ref} className={[css(styles.timeline), props.className].join(' ')} style={props.style}>
      <div className={css(styles.first, styles.separate)} />
      <div className={css(styles.second, styles.separate)} />
      <div className={css(styles.third, styles.separate)} />
      {MINI_SEPARATE_LEFTS.map((s, index) => {
        return <div key={`mini-separate-${index}`} className={css(styles.miniSeparate)} style={{ left: `${s}%` }} />;
      })}
    </div>
  );
});

export default Timeline;
