import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { BackgroundColorLight } from '../../types/colors';

const styles = StyleSheet.create({
  vote: {
    height: '100%'
  }
});

const VoteButton = () => {
  return (
    <div className={css(styles.vote)}>
      <div className='hb-vote-widget' style={{ padding: 0, backgroundColor: BackgroundColorLight }}>
        <a className='hb-link' href='https://www.reactriot.com/entries/40-team-kuramae' target='_blank'>
          Built for
          <img height='30' src='https://rumblex-reactriot1.s3.amazonaws.com/images/widget-logo.png' alt='Widget logo' />
        </a>
        <a className='hb-vote-btn' href='https://www.reactriot.com/entries/40-team-kuramae/vote'>
          Vote for us
        </a>
      </div>
    </div>
  );
};

export default VoteButton;
