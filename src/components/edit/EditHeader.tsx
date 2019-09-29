import * as React from 'react';
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
    overflow: 'hidden'
  },
  brand: {
    color: '#FFF',
    fontSize: '18px',
    whiteSpace: 'nowrap'
  },
  title: {
    color: '#FFF',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginRight: 'auto',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '20px',
    fontWeight: 700
  },
  titleValue: {
    border: '1px solid #666666',
    borderRadius: '10px',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  composerValue: {
    color: '#FFF',
    fontWeight: 700
  },
  composer: {
    color: '#999999',
    fontSize: '16px',
    fontWeight: 500
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

type PropTypes = {
  isShared: boolean;
  title?: string;
  composer?: string;
};

const EditHeader = (props: PropTypes) => {
  const { isShared, title, composer } = props;
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.brand)}>
        <span className={css(styles.emoji)}>🎶 </span>
        Emoji Beat
      </div>
      <div className={css(styles.title)}>
        {isShared ? (
          <span className={css(styles.titleValue)}>
            <span className={css(styles.emoji)}>🎵 </span>
            {title}
            <span className={css(styles.composer)}>
              {' - Composed by '}
              <span className={css(styles.composerValue)}>{composer}</span>
            </span>
          </span>
        ) : (
          undefined
        )}
      </div>
      <div className={css(styles.right)}>
        <VoteButton />
      </div>
    </div>
  );
};

EditHeader.defaultProps = {
  title: 'Untitled Beat',
  composer: 'Anonymous'
};

export default EditHeader;
