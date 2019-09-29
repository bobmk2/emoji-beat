import { Emoji } from '../enums/emoji';

export type ButtonState = boolean;

export type Line = {
  emoji: Emoji;
  buttonStates: ButtonState[];
  volume: number; // 0 - 100
  playbackRate: number; // 0.5 - 4.0
  isMute: boolean;
};
