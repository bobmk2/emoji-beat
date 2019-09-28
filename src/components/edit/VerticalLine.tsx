import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';

const animation = {
  '0%': {
    left: '0%'
  },
  '100%': {
    left: '100%'
  }
};

const styles = StyleSheet.create({
  verticalLine: {
    position: 'absolute',
    backgroundColor: '#FFF',
    width: '5px',
    height: '100%',
    opacity: 0.7,
    left: '0%'
  },
  on: {
    animationName: [animation]
  }
});

type PropTypes = {
  onePlayMs?: number;
  isRepeatOn: boolean;
};

const VerticalLine = (props: PropTypes) => {
  const { onePlayMs, isRepeatOn } = props;

  const style = React.useMemo(() => {
    if (typeof onePlayMs === 'undefined') {
      return undefined;
    }

    return {
      animationTimingFunction: 'linear',
      animationDuration: `${onePlayMs}ms`,
      animationIterationCount: isRepeatOn ? 'infinite' : 1
    };
  }, [onePlayMs, isRepeatOn]);

  // @ts-ignore
  return (
    <div className={css(styles.verticalLine, typeof onePlayMs !== 'undefined' ? styles.on : undefined)} style={style} />
  );
};

export default VerticalLine;
