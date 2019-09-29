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
  style?: React.CSSProperties;
  onePlayMs?: number;
  isRepeatOn: boolean;
};

const VerticalLine = (props: PropTypes) => {
  const { style, onePlayMs, isRepeatOn } = props;

  const _style = React.useMemo(() => {
    if (typeof onePlayMs === 'undefined') {
      return { ...style };
    }

    return {
      ...style,
      animationTimingFunction: 'linear',
      animationDuration: `${onePlayMs}ms`,
      animationIterationCount: isRepeatOn ? 'infinite' : 1
    };
  }, [onePlayMs, isRepeatOn, style]);

  // @ts-ignore
  return (
    <div
      style={_style}
      className={css(styles.verticalLine, typeof onePlayMs !== 'undefined' ? styles.on : undefined)}
    />
  );
};

export default VerticalLine;
