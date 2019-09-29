import { ButtonState } from './../types/values/sequencer';
import { Line } from '../types/values/sequencer';
import { Base64 } from 'js-base64';
import { Emoji } from '../types/enums/emoji';
// @ts-ignore
import padStart from 'lodash/padStart';

export const createSaveData = (tempo: number, lines: Line[]): string => {
  const chunks: string[] = lines.map(line => {
    const emojiname = line.emoji.toString();
    const volume = line.volume.toString(16);
    const playbackRate = line.playbackRate;
    const isMute = line.isMute ? 1 : 0;
    const buttons = parseInt(line.buttonStates.map(s => (s ? 1 : 0)).join(''), 2);
    return `${emojiname},${volume},${playbackRate},${isMute},${buttons}`;
  });

  return Base64.encodeURI(`${tempo}|` + chunks.join('|'));
};

export const parseSaveData = (saveData: string): { tempo: number; lines: Line[] } | undefined => {
  try {
    const decoded = Base64.decode(saveData);

    const chunks = decoded.split('|');

    const tempoStr: string | undefined = chunks.shift();
    if (typeof tempoStr === 'undefined') {
      return undefined;
    }
    const tempo = parseInt(tempoStr, 10);

    const lines: Line[] = chunks.map(chunk => {
      const data = chunk.split(',');
      const emoji = data[0] as Emoji;
      const volume = parseInt(data[1], 16);
      const playbackRate = parseFloat(data[2]);
      const isMute = parseInt(data[3]) == 1;
      const buttonStates: ButtonState[] = padStart(`${parseInt(data[4], 10).toString(2)}`, 16)
        .split('')
        .map((s: string) => {
          return s === '1';
        });
      return {
        emoji,
        volume,
        playbackRate,
        isMute,
        buttonStates
      };
    });

    return { tempo, lines };
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
