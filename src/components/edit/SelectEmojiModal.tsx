import * as React from 'react';
import { Emoji } from '../../types/enums/emoji';
import { Modal, Button } from 'react-bootstrap';

import { EmojiSetting, EmojiSettings } from '../../types/values/emoji-setting';
import { StyleSheet, css } from 'aphrodite';
// @ts-ignore
import chunk from 'lodash/chunk';
// @ts-ignore
import ReactSound from 'react-sound';
import { SIcon, RIcon } from '../common/FontAwesomeIcon';
import VolumeSlider from './VolumeSlider';
import SoundChamber from './SoundChamber';
import PlaybackSpeedSlider from './PlaybackSpeedSlider';

const styles = StyleSheet.create({
  panels: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    display: 'flex',
    width: '100%',
    alignItems: 'center'
  },
  sliderTable: {},
  sliders: {
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
  sampleSoundButtonArea: {
    marginLeft: '15px'
  },
  volumeSlider: {
    display: 'flex',
    alignItems: 'center'
  },
  playbackRateSlider: {
    display: 'flex',
    alignItems: 'center'
  },
  volumeRow: {
    marginBottom: '10px'
  },
  volumeLabelCell: {
    textAlign: 'right',
    fontSize: '16px'
  },
  volumeCell: {
    maxWidth: '50px',
    minWidth: '50px'
  },
  volumeValue: {
    marginLeft: '5px',
    marginRight: '10px'
  },
  playbackRateLabelCell: {
    textAlign: 'right',
    fontSize: '14px',
    verticalAlign: 'middle'
  },
  playbackRateCell: {
    maxWidth: '50px',
    minWidth: '50px'
  },
  selectedItem: {
    fontSize: '30px',
    marginRight: '5px'
  },
  panelsChunk: {
    display: 'inline-block'
  },
  okButton: {
    marginLeft: '10px'
  },
  disabledCell: {
    opacity: 0.5
  },
  panel: {
    border: '1px solid #333',
    borderRadius: '10px',
    display: 'inline-block',
    width: '100px',
    height: '100px',
    fontSize: '30px',
    textShadow:
      'rgb(255, 255, 255) 2px 0px 0px, rgb(255, 255, 255) 1.75517px 0.958851px 0px, rgb(255, 255, 255) 1.0806px 1.68294px 0px, rgb(255, 255, 255) 0.141474px 1.99499px 0px, rgb(255, 255, 255) -0.832294px 1.81859px 0px, rgb(255, 255, 255) -1.60229px 1.19694px 0px, rgb(255, 255, 255) -1.97998px 0.28224px 0px, rgb(255, 255, 255) -1.87291px -0.701566px 0px, rgb(255, 255, 255) -1.30729px -1.5136px 0px, rgb(255, 255, 255) -0.421592px -1.95506px 0px, rgb(255, 255, 255) 0.567324px -1.91785px 0px, rgb(255, 255, 255) 1.41734px -1.41108px 0px, rgb(255, 255, 255) 1.92034px -0.558831px 0px;',
    [':hover']: {
      opacity: 0.7
    },
    [':active']: {
      opacity: 0.5
    },
    overflow: 'hidden'
  },
  panelChild: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  unselected: {},
  selectedPanel: {
    fontSize: '70px',
    borderWidth: '5px',
    borderColor: '#999'
  },
  footer: {
    width: '100%',
    display: 'flex'
  },
  footerSeparator: {
    marginRight: 'auto'
  }
});

type PropTypes = {
  show: boolean;
  defaultEmoji?: Emoji;
  defaultPlaybackRate: number;
  defaultVolume: number;
  onExited?: () => void;
  onOK: (emoji: Emoji, volue: number, playbackRate: number) => void;
  onHide: () => void;
  onDelete?: () => void;
};

const SelectEmojiModal = (props: PropTypes) => {
  const { show, onExited, defaultEmoji, defaultPlaybackRate, defaultVolume, onHide, onOK, onDelete } = props;

  const [selectedEmoji, setSelectedEmoji] = React.useState(defaultEmoji);
  const [selectedPlaybackRate, setSelectedPlaybackRate] = React.useState(defaultPlaybackRate);
  const [selectedVolume, setSelectedVolume] = React.useState(defaultVolume);

  React.useEffect(() => {
    setSelectedEmoji(defaultEmoji);
    setSelectedPlaybackRate(defaultPlaybackRate);
    setSelectedVolume(defaultVolume);
    setSelectedSetting(defaultEmoji ? EmojiSettings[defaultEmoji] : undefined);
  }, [defaultEmoji, defaultPlaybackRate, defaultVolume]);

  const emojiChunks: { emoji: Emoji; setting: EmojiSetting }[][] = React.useMemo(() => {
    // console.log(EmojiSettings);
    const t = Object.keys(EmojiSettings).map(name => {
      const emoji = name as Emoji;
      const setting = EmojiSettings[name];
      return {
        emoji,
        setting
      };
    });
    return chunk(t, 4);
  }, []);

  const handleClickPanel = React.useCallback((emoji: Emoji, selected: boolean) => {
    if (selected) {
      setSelectedEmoji(emoji);
      setSelectedSetting(EmojiSettings[emoji]);
      setSoundPlayStatus('PLAYING');
    }
  }, []);

  const [selectedSetting, setSelectedSetting] = React.useState<EmojiSetting | undefined>(
    typeof selectedEmoji === 'undefined' ? undefined : EmojiSettings[selectedEmoji]
  );
  const [soundPlayStatus, setSoundPlayStatus] = React.useState<ReactSound.PlayStatus>('STOPPED');
  const handleFinishedPlaying = React.useCallback(() => {
    setSoundPlayStatus('STOPPED');
  }, []);

  const handleClickOK = React.useCallback(() => {
    if (typeof selectedEmoji !== 'undefined') {
      setSelectedSetting(undefined);
      onOK(selectedEmoji, selectedVolume, selectedPlaybackRate);
    }
  }, [onOK, selectedEmoji, selectedVolume, selectedPlaybackRate]);

  const handleChangeVolume = React.useCallback((next: number) => {
    setSelectedVolume(next);
  }, []);
  const handleChangePlaybackRate = React.useCallback((next: number) => {
    setSelectedPlaybackRate(next);
  }, []);

  const [clickedSampleSoundCount, setClickedSampleSoundCount] = React.useState(0);
  const handleClickSampleSound = React.useCallback(() => {
    setClickedSampleSoundCount(clickedSampleSoundCount + 1);
  }, [clickedSampleSoundCount]);

  const handleAfterChange = React.useCallback(() => {
    setClickedSampleSoundCount(clickedSampleSoundCount + 1);
  }, [clickedSampleSoundCount]);

  return (
    <Modal show={show} onHide={onHide} onExited={onExited}>
      {typeof selectedSetting !== 'undefined' && typeof selectedEmoji !== 'undefined' ? (
        <>
          <ReactSound
            playStatus={soundPlayStatus}
            url={`/se/${selectedSetting.sound}`}
            volume={selectedVolume}
            playbackRate={selectedPlaybackRate}
            onFinishedPlaying={handleFinishedPlaying}
          />
          {clickedSampleSoundCount > 0 ? (
            <SoundChamber
              url={`/se/${selectedSetting.sound}`}
              isPlayOn={true}
              soundIndex={clickedSampleSoundCount}
              playbackRate={selectedPlaybackRate}
              volume={selectedVolume}
              isMute={false}
            />
          ) : (
            undefined
          )}
        </>
      ) : (
        undefined
      )}
      <Modal.Header>
        <div className={css(styles.header)}>
          <span className={css(styles.selectedItem)}>
            {typeof selectedSetting !== 'undefined' ? selectedSetting.value : '❓'}
          </span>
          <div className={css(styles.sliders)}>
            <table className={css(styles.sliderTable)}>
              <tbody>
                <tr className={css(styles.volumeRow)}>
                  <td
                    className={css(
                      styles.volumeLabelCell,
                      typeof selectedSetting === 'undefined' ? styles.disabledCell : undefined
                    )}
                  >
                    <RIcon name='volume' padding='right' />
                    {'Volume: '}
                  </td>
                  <td
                    className={css(
                      styles.volumeCell,
                      typeof selectedSetting === 'undefined' ? styles.disabledCell : undefined
                    )}
                  >
                    <strong className={css(styles.volumeValue)}>{selectedVolume}</strong>{' '}
                  </td>
                  <td>
                    <VolumeSlider
                      disabled={typeof selectedSetting === 'undefined'}
                      volume={selectedVolume}
                      onChange={handleChangeVolume}
                      onAfterChange={handleAfterChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    className={css(
                      styles.playbackRateLabelCell,
                      typeof selectedSetting === 'undefined' ? styles.disabledCell : undefined
                    )}
                  >
                    <RIcon name='running' padding='right' />
                    {'Playback speed: '}
                  </td>
                  <td
                    className={css(
                      styles.playbackRateCell,
                      typeof selectedSetting === 'undefined' ? styles.disabledCell : undefined
                    )}
                  >
                    <strong className={css(styles.volumeValue)}>
                      {'x'}
                      {selectedPlaybackRate}
                    </strong>
                  </td>
                  <td>
                    <PlaybackSpeedSlider
                      disabled={typeof selectedSetting === 'undefined'}
                      playbackRate={selectedPlaybackRate}
                      onChange={handleChangePlaybackRate}
                      onAfterChange={handleAfterChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={css(styles.sampleSoundButtonArea)}>
            <Button
              disabled={typeof selectedSetting === 'undefined'}
              variant='secondary'
              onClick={handleClickSampleSound}
            >
              <RIcon name='volume' />
            </Button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className={css(styles.panels)}>
          {emojiChunks.map((chunk, chunkIndex) => {
            return (
              <div key={`chunk-${chunkIndex}`} className={css(styles.panelsChunk)}>
                {chunk.map((item, itemIndex) => {
                  return (
                    <EmojiTogglePanel
                      className={
                        typeof selectedEmoji !== 'undefined' && item.emoji !== selectedEmoji
                          ? css(styles.unselected)
                          : undefined
                      }
                      key={`item-${chunkIndex}-${itemIndex}`}
                      selected={item.emoji === selectedEmoji}
                      emoji={item.emoji}
                      setting={item.setting}
                      onClick={handleClickPanel}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className={css(styles.footer)}>
          {typeof onDelete !== 'undefined' ? (
            <Button size='lg' variant='danger' onClick={onDelete}>
              <SIcon name='trash' padding='right' />
              Delete
            </Button>
          ) : (
            undefined
          )}
          <span className={css(styles.footerSeparator)} />
          <Button size='lg' variant='secondary' onClick={onHide}>
            Cancel
          </Button>
          <Button
            className={css(styles.okButton)}
            size='lg'
            onClick={handleClickOK}
            disabled={typeof selectedEmoji === 'undefined'}
            variant='primary'
          >
            👌 OK
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

type EmojiTogglePanelPropTypes = {
  className?: string;
  selected: boolean;
  emoji: Emoji;
  setting: EmojiSetting;
  onClick: (emoji: Emoji, selected: boolean) => void;
};

const EmojiTogglePanel = (props: EmojiTogglePanelPropTypes) => {
  const { className, emoji, setting, selected, onClick } = props;

  const handleClick = React.useCallback(() => {
    onClick(emoji, !selected);
  }, [emoji, selected, onClick]);

  return (
    <div
      className={[css(styles.panel, selected ? styles.selectedPanel : undefined), className].join(' ')}
      style={{ backgroundColor: setting.color }}
      onClick={handleClick}
    >
      <div className={css(styles.panelChild)}>{setting.value}</div>
    </div>
  );
};

SelectEmojiModal.defaultProps = {
  defaultPlaybackRate: 1.0,
  defaultVolume: 100
};

export default SelectEmojiModal;
