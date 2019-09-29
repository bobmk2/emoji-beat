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
  },
  RobotFace: {
    value: '🤖',
    sound: 'robot_face.mp3',
    color: '#699CA5'
  },
  CameraWithFlash: {
    value: '📸',
    sound: 'camera_with_flash.mp3',
    color: '#555'
  },
  ComputerMouse: {
    value: '🖱️',
    sound: 'computer_mouse.mp3',
    color: '#DDD'
  },
  Keyboard: {
    value: '⌨️',
    sound: 'keyboard.mp3',
    color: '#DDD'
  },
  MobilePhone: {
    value: '📱',
    sound: 'mobile_phone.mp3',
    color: '#555'
  },
  PortableWater: {
    value: '🚰',
    sound: 'portable_water.mp3',
    color: '#D7F1FF'
  },
  Unlocked: {
    value: '🔓',
    sound: 'unlocked.mp3',
    color: '#E7E899'
  },
  MoneyWithWings: {
    value: '💸',
    sound: 'money_with_wings.mp3',
    color: '#D1CFC0'
  },
  ClinkingGlasses: {
    value: '🥂',
    sound: 'clinking_glasses.mp3',
    color: '#F6E871'
  },
  Ticket: {
    value: '🎫',
    sound: 'ticket.mp3',
    color: '#F9E472'
  },
  PingPong: {
    value: '🏓',
    sound: 'ping_pong.mp3',
    color: '#F3211A'
  },
  PartyPopper: {
    value: '🎉',
    sound: 'party_popper.mp3',
    color: '#F4C63D'
  },
  MantelpieceClock: {
    value: '🕰️',
    sound: 'mantelpiece_clock.mp3',
    color: '#C9734E'
  },
  Backpack: {
    value: '🎒',
    sound: 'backpack.mp3',
    color: '#E33A35'
  },
  Fire: {
    value: '🔥',
    sound: 'fire.mp3',
    color: '#EF6C00'
  },
  SleepyFace: {
    value: '😪',
    sound: 'sleepy_face.mp3',
    color: '#5E7BFF'
  },
  CrossedSwords: {
    value: '⚔️',
    sound: 'crossed_swords.mp3',
    color: '#B5CACC'
  },
  OncomingFist: {
    value: '👊',
    sound: 'oncoming_fist.mp3',
    color: '#FF0'
  },
  CrystalBall: {
    value: '🔮',
    sound: 'crystal_ball.mp3',
    color: '#E28CEB'
  },
  HundredPoints: {
    value: '💯',
    sound: 'hundred_points.mp3',
    color: '#E31F00'
  }
};
