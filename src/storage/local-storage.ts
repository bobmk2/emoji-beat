import * as lsu from '../utils/local-storage-util';

const PREFIX = 'Edit';

const NAMES = {
  beatScore: 'beatScore'
};

export const saveBeatScore = (value: string): void => {
  lsu.saveString(PREFIX, NAMES.beatScore, value);
};

export const loadBeatScore = (): string | undefined => {
  return lsu.loadString(PREFIX, NAMES.beatScore);
};
