import { Emoji } from '../enums/emoj';

export type ButtonState = boolean;

export type Line = {
  color: RgbColor;
  emoji: Emoji;
  buttonStates: ButtonState[];
};
