import { Emoji } from '../enums/emoji';

export type ButtonState = boolean;

export type Line = {
  emoji: Emoji;
  buttonStates: ButtonState[];
  playbackRate: number;
};
