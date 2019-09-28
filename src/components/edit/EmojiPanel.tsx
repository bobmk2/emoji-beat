import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Emoji } from '../../types/enums/emoj';
import EmojiIcon from '../common/EmojiIcon';

const styles = StyleSheet.create({
  emojiPanel: {
    width: '100%',
    height: '100px',
    backgroundColor: '#00AAFF',
    display: 'flex'
  },
  emoji: {
    fontSize: '250%'
  }
});

type PropTypes = {
  index: number;
  emoji: Emoji;
};

const EmojiPanel = (props: PropTypes) => {
  return (
    <div className={css(styles.emojiPanel)}>
      <EmojiIcon className={css(styles.emoji)} name={props.emoji} />
    </div>
  );
};

export default EmojiPanel;
