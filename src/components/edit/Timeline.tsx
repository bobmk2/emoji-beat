import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  timeline: {
    height: '20px',
    width: '100%',
    backgroundColor: '#AAAAFF'
  }
});

type PropTypes = {
  className?: string;
};

const Timeline = React.forwardRef((props: PropTypes, ref: React.Ref<HTMLDivElement>) => {
  return <div ref={ref} className={[css(styles.timeline), props.className].join(' ')}></div>;
});

export default Timeline;
