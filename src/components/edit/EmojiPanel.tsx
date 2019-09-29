import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Emoji } from '../../types/enums/emoji';
import EmojiIcon from '../common/EmojiIcon';
import { Border } from '../../types/colors';
import { Button } from 'react-bootstrap';
import { RIcon } from '../common/FontAwesomeIcon';

const styles = StyleSheet.create({
  emojiPanel: {
    width: '100%',
    height: '90px',
    display: 'flex',
    alignItems: 'center',
    borderTop: `1px solid ${Border}`,
    borderLeft: 0,
    borderRight: `4px solid ${Border}`,
    [':last-child']: {
      borderBottom: `1px solid ${Border}`
    }
  },
  emoji: {
    fontSize: '50px'
  },
  mute: {
    opacity: 0.5
  }
});

type PropTypes = {
  index: number;
  emoji: Emoji;
  isMute: boolean;
  onClickMute: (index: number, isMute: boolean) => void;
};

const EmojiPanel = (props: PropTypes) => {
  const { index, isMute, onClickMute } = props;

  const handleClickMute = React.useCallback(() => {
    onClickMute(index, !isMute);
  }, [index, isMute, onClickMute]);

  return (
    <div className={css(styles.emojiPanel)}>
      <Button size='sm' variant={isMute ? 'dark' : 'outline-light'} onClick={handleClickMute}>
        <RIcon name={isMute ? 'volume-mute' : 'volume'} />
      </Button>
      <EmojiIcon className={css(styles.emoji, isMute ? styles.mute : undefined)} name={props.emoji} />
    </div>
  );
};

export default EmojiPanel;
