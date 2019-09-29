import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Emoji } from '../../types/enums/emoji';
import EmojiIcon from '../common/EmojiIcon';
import { Border, BackgroundColorLight } from '../../types/colors';
import { Button } from 'react-bootstrap';
import { RIcon, SIcon } from '../common/FontAwesomeIcon';
import SelectEmojiModal from './SelectEmojiModal';

const styles = StyleSheet.create({
  emojiPanel: {
    padding: '5px',
    width: '100%',
    backgroundColor: BackgroundColorLight,
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
  emojiArea: {
    flex: 1,
    position: 'relative',
    height: '100%'
  },
  back: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  ftont: {
    whiteSpace: 'nowrap',
    position: 'absolute',
    left: '50%',
    bottom: 0,
    border: '2px solid #EEE',
    fontSize: '12px',
    backgroundColor: '#000',
    opacity: 0.8,
    borderRadius: '5px',
    color: '#FFF',
    padding: '2px',
    paddingLeft: '5px',
    paddingRight: '5px',
    transform: 'translate(-50%, 0%)'
  },
  emoji: {
    fontSize: '60px',
    textShadow:
      'rgb(255, 255, 255) 2px 0px 0px, rgb(255, 255, 255) 1.75517px 0.958851px 0px, rgb(255, 255, 255) 1.0806px 1.68294px 0px, rgb(255, 255, 255) 0.141474px 1.99499px 0px, rgb(255, 255, 255) -0.832294px 1.81859px 0px, rgb(255, 255, 255) -1.60229px 1.19694px 0px, rgb(255, 255, 255) -1.97998px 0.28224px 0px, rgb(255, 255, 255) -1.87291px -0.701566px 0px, rgb(255, 255, 255) -1.30729px -1.5136px 0px, rgb(255, 255, 255) -0.421592px -1.95506px 0px, rgb(255, 255, 255) 0.567324px -1.91785px 0px, rgb(255, 255, 255) 1.41734px -1.41108px 0px, rgb(255, 255, 255) 1.92034px -0.558831px 0px;'
  },
  mute: {
    opacity: 0.5
  }
});

type PropTypes = {
  index: number;
  emoji: Emoji;
  isMute: boolean;
  playbackRate: number;
  volume: number;
  onChangeSetting: (index: number, emoji: Emoji, playbackRate: number, volume: number) => void;
  onClickMute: (index: number, isMute: boolean) => void;
  onDelete: (index: number) => void;
};

const EmojiPanel = (props: PropTypes) => {
  const { index, isMute, onChangeSetting, onClickMute, emoji, volume, playbackRate, onDelete } = props;

  const handleClickMute = React.useCallback(() => {
    onClickMute(index, !isMute);
  }, [index, isMute, onClickMute]);

  const [showSelectEmojiModal, setShowSelectEmojiModal] = React.useState(false);
  const handleHideSelectEmojiModal = React.useCallback(() => {
    setShowSelectEmojiModal(false);
  }, []);

  const handleClickSetting = React.useCallback(() => {
    setShowSelectEmojiModal(true);
  }, []);

  const handleClickOK = React.useCallback(
    (emoji: Emoji, volume: number, playbackRate: number) => {
      setShowSelectEmojiModal(false);
      onChangeSetting(index, emoji, volume, playbackRate);
    },
    [index, onChangeSetting]
  );

  const handleClickDelete = React.useCallback(() => {
    onDelete(index);
    setShowSelectEmojiModal(false);
  }, [onDelete, index]);

  return (
    <div className={css(styles.emojiPanel)}>
      <Button variant={isMute ? 'dark' : 'outline-light'} onClick={handleClickMute}>
        <RIcon name={isMute ? 'volume-mute' : 'volume'} />
      </Button>
      <div className={css(styles.emojiArea)}>
        <div className={css(styles.back)}>
          <EmojiIcon className={css(styles.emoji, isMute ? styles.mute : undefined)} name={props.emoji} />
        </div>
        {volume !== 100 || playbackRate !== 1.0 ? (
          <div className={css(styles.ftont)}>
            {volume !== 100 ? (
              <span>
                <SIcon name='volume' padding='right' />
                {volume}
              </span>
            ) : (
              undefined
            )}
            {playbackRate !== 1.0 ? (
              <span>
                {volume !== 100 ? ' / ' : undefined}
                <RIcon name='running' padding='right' />
                {'x'}
                {playbackRate}
              </span>
            ) : (
              undefined
            )}
          </div>
        ) : (
          undefined
        )}
      </div>
      <SelectEmojiModal
        show={showSelectEmojiModal}
        onOK={handleClickOK}
        onHide={handleHideSelectEmojiModal}
        onDelete={handleClickDelete}
        defaultEmoji={emoji}
        defaultVolume={volume}
        defaultPlaybackRate={playbackRate}
      />
      <Button variant={'outline-light'} onClick={handleClickSetting}>
        <SIcon name={'cog'} />
      </Button>
    </div>
  );
};

export default EmojiPanel;
