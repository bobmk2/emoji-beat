import * as React from 'react';
import { Button } from 'react-bootstrap';
import { SIcon } from '../common/FontAwesomeIcon';
import { BackgroundColorLight, Border } from '../../types/colors';
import { StyleSheet, css } from 'aphrodite';
import VoteButton from '../common/VoteButton';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '10px',
    backgroundColor: BackgroundColorLight,
    borderBottom: `2px solid ${Border}`,
    overflow: 'hidden'
  },
  title: {
    color: '#FFF',
    fontSize: '18px',
    marginRight: 'auto'
  },
  right: {
    height: '100%',
    minWidth: '200px'
  },
  emoji: {
    textShadow:
      'rgb(255, 255, 255) 2px 0px 0px, rgb(255, 255, 255) 1.75517px 0.958851px 0px, rgb(255, 255, 255) 1.0806px 1.68294px 0px, rgb(255, 255, 255) 0.141474px 1.99499px 0px, rgb(255, 255, 255) -0.832294px 1.81859px 0px, rgb(255, 255, 255) -1.60229px 1.19694px 0px, rgb(255, 255, 255) -1.97998px 0.28224px 0px, rgb(255, 255, 255) -1.87291px -0.701566px 0px, rgb(255, 255, 255) -1.30729px -1.5136px 0px, rgb(255, 255, 255) -0.421592px -1.95506px 0px, rgb(255, 255, 255) 0.567324px -1.91785px 0px, rgb(255, 255, 255) 1.41734px -1.41108px 0px, rgb(255, 255, 255) 1.92034px -0.558831px 0px;'
  }
});

// type PropTypes = {};

const EditHeader = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.title)}>
        <span className={css(styles.emoji)}>🎶 </span>
        Emoji Beat
      </div>
      <div className={css(styles.right)}>
        <VoteButton />
      </div>
    </div>
  );
};

export default EditHeader;
