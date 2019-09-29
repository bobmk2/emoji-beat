import { Emoji } from '../enums/emoji';
// TODO: move to .json file

/*
{
  value: '',
  sound: '.mp3',
  color: '#'
}
*/

export function emojiSetting(emoji: Emoji): EmojiSetting | undefined {
  return EmojiSettings[emoji];
}

export type EmojiSetting = {
  value: string;
  sound: string;
  color: RgbColor;
};

export const EmojiSettings: { [key: string]: EmojiSetting } = {
  Billiards: {
    value: '🎱',
    sound: 'billiards.mp3',
    color: '#333'
  },
  BottoleWithPoppingCork: {
    value: '🍾',
    sound: 'bottleWithPoppingCork.mp3',
    color: '#0AA305'
  },
  Crap: {
    value: '👏',
    sound: 'crap.mp3',
    color: '#FF0'
  },
  Card: {
    value: '🃏',
    sound: 'card.mp3',
    color: '#DDD'
  },
  Can: {
    value: '🥫',
    sound: 'can.mp3',
    color: '#F00'
  },
  Cat: {
    value: '🐱',
    sound: 'cat.mp3',
    color: '#FFBA01'
  },
  Dog: {
    value: '🐶',
    sound: 'dog.mp3',
    color: '#BC9267'
  },
  Egg: {
    value: '🥚',
    sound: 'egg.mp3',
    color: '#EEE'
  },
  Elephant: {
    value: '🐘',
    sound: 'elephant.mp3',
    color: '#BBB'
  },
  FaceWithTearsOfJoy: {
    value: '😂',
    sound: 'faceWithTearsOfJoy.mp3',
    color: '#FF0'
  },
  Firecracker: {
    value: '🧨',
    sound: 'firecracker.mp3',
    color: '#F00'
  },
  Pistol: {
    value: '🔫',
    sound: 'pistol.mp3',
    color: '#3A3'
  },
  Rooster: {
    value: '🐔',
    sound: 'rooster.mp3',
    color: '#F00'
  },
  Sandwich: {
    value: '🥪',
    sound: 'sandwich.mp3',
    color: '#FFA'
  },
  Sushi: {
    value: '🍣',
    sound: 'sushi.wav',
    color: '#F44'
  },
  Sheep: {
    value: '🐑',
    sound: 'sheep.mp3',
    color: '#DDD'
  }
};
