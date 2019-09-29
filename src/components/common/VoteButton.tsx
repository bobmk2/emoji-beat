import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { BackgroundColorLight } from '../../types/colors';

const styles = StyleSheet.create({
  vote: {
    height: '100%',
    whiteSpace: 'nowrap'
  },
  hbVoteWidget: {
    color: '#FFF',
    textShadow: '0 0 3px rgba(0,0,0,0.5);',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    fontFamily: `"Work sans", "Helvetica Neue", Helvetica, Arial, sans-serif`
  },
  buildFor: {
    marginRight: '5px'
  },
  hbLink: {
    color: '#FFF',
    textDecoration: 'none',
    [':hover']: {
      opacity: 0.7
    }
  },
  hbVoteButton: {
    color: '#FFF',
    textDecoration: 'none',
    display: 'inline-block',
    border: '1px solid rgba(255,255,255, 0.8)',
    padding: '5px 10px',
    marginLeft: '10px',
    borderRadius: '5px',
    textTransform: 'uppercase',
    fontSize: '12px',
    [':hover']: {
      backgroundColor: '#DDD',
      border: '1px solid rgba(40, 40, 40, 0.8)',
      color: '#000'
    },
    [':active']: {
      backgroundColor: '#FFF',
      border: '1px solid rgba(90, 90, 90, 0.8)',
      color: '#333'
    }
  }
});

const VoteButton = () => {
  return (
    <div className={css(styles.vote)}>
      <div className={css(styles.hbVoteWidget)} style={{ padding: 0, backgroundColor: BackgroundColorLight }}>
        <span className={css(styles.buildFor)}>Built for</span>
        <a className={css(styles.hbLink)} href='https://www.reactriot.com/entries/40-team-kuramae' target='_blank'>
          <img height='30' src='https://rumblex-reactriot1.s3.amazonaws.com/images/widget-logo.png' alt='Widget logo' />
        </a>
        <a
          className={css(styles.hbVoteButton)}
          href='https://www.reactriot.com/entries/40-team-kuramae/vote'
          target='_blank'
        >
          Vote for us
        </a>
        <script src='https://www.reactriot.com/entries/40-team-kuramae/vote.js' type='text/javascript'></script>
      </div>
    </div>
  );
};

export default VoteButton;
