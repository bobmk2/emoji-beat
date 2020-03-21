# emoji-beat

## ❓ What is this

- This is beat sequencer application with emoji sound.
  - App page: [🎶 Emoji Beat](https://emoji-beat.herokuapp.com/)
- I developed this at [React Riot 2019](https://www.reactriot.com/) in 2 days.
  - Entry page: https://www.reactriot.com/entries/40-team-kuramae
- And I'm honored to receive Hacker favorite award. 🎉🎉🎉
  - Thanks!! 😆

## 🕰️ Archived Pages

- I've archieved pages in commemoration because react riot will be renewed the top page at next year.
  - https://megalodon.jp/2020-0322-0033-53/https://www.reactriot.com:443/
  - https://megalodon.jp/2020-0322-0039-42/https://www.reactriot.com:443/entries/40-team-kuramae

## 📝 Note

- This repository has been fleezed since React Riot 2019 (except this `README.md` file).
- I know there are some issues and plobrems, but I have no plans to fix them.

## 🚀 Intro

```bash
# Install
npm install

# Development
npm run dev-server

# Build for deploy
npm run build:prod
```

## 📝 Entry Contents at React Riot

### ⚠ Note

- This site makes a sound.

### Recommended browsers

- Google Chrome
- Firefox (Almost OK. But I know some problems.)

### How to use

#### Play beats

- Click the blue play button to the bottom center of site.
- If you want to play beats only once, toggle off by clicking on the repeat button.

![play_beats](https://user-images.githubusercontent.com/1858949/65875722-cf254e80-e3c2-11e9-833b-5cb3c17a8cb9.gif)

#### Edit beats

- Click on the lined up squares.
- The emoji sound will be emitted in the shining it.

![edit_beats](https://user-images.githubusercontent.com/1858949/65875589-89688600-e3c2-11e9-9030-66f22a754301.gif)

#### Change BPM (play score speed)

- Slide the BPM slider to the left bottom of site.

![change_bpm](https://user-images.githubusercontent.com/1858949/65876198-aea9c400-e3c3-11e9-8048-f6d9abbfe6b7.gif)

#### Add emoji sound

- Press the add button at the bottom to the left of the emoji sound.
- Select emoji and edit sound volume and playback speed.
  - You can change this setting after.
- After then, click the ok button.

![add_sound](https://user-images.githubusercontent.com/1858949/65876438-2ed02980-e3c4-11e9-9ece-bc80ee756fde.gif)

#### Change setting emoji sound

- Press the cog button to the right of emoji sound.
- Edit sound, volume and playback speed on the modal.
- After then, click the ok button.

![change_sound](https://user-images.githubusercontent.com/1858949/65876528-6b9c2080-e3c4-11e9-8fa5-d0b3ef26135c.gif)

#### Delete emoji sound

- Press the cog button to the right of emoji sound.
- And press the delete button to the left bottom on the modal.

![delete_emoji_sound](https://user-images.githubusercontent.com/1858949/65876817-288e7d00-e3c5-11e9-8760-1fa4bcf1788d.gif)

#### Toggle enable / disable sound

- You can toggle enable / disable the sound by clicking on the volume button of the left emoji.

![toggle_enable_disable_sound](https://user-images.githubusercontent.com/1858949/65876935-72776300-e3c5-11e9-9f3b-6d567c0896f3.gif)

#### Save beat score

- Click the save button to the right bottom of site.
- There is this save data to the local storage of the browser.
- Note: You can save the beat score _only one_ .

![save_beat_score](https://user-images.githubusercontent.com/1858949/65877133-d4d06380-e3c5-11e9-87f4-f14eb5cc65c6.gif)

#### Share your score

- Click the share button to the right bottom of site.
- You can set the title and author of your score.
  - _Note_: Able to skip this steps.
- Click the copy button.
  - Copied the share url to the clipboard.
- Share the url!!

![share_your_score_1](https://user-images.githubusercontent.com/1858949/65877215-0d703d00-e3c6-11e9-83c3-6a6065220a2d.gif)

![share_your_score_2](https://user-images.githubusercontent.com/1858949/65877228-119c5a80-e3c6-11e9-946b-11403a3d886c.gif)

## 📚 Resources

### Sounds

- 効果音ラボ (Japanese site): https://soundeffect-lab.info/
- Wingless Seraph (Japanese site): https://wingless-seraph.net/

### Dependencies

#### Client

- React: https://ja.reactjs.org/
- Bootstrap: https://getbootstrap.com/?
- React Bootstrap: https://react-bootstrap.github.io/
- lodash: https://lodash.com/
- Moment.js: https://momentjs.com/
- aphrodite: https://github.com/Khan/aphrodite
- rc-slider: http://react-component.github.io/slider/
- qs: https://github.com/ljharb/qs
- react-sound: https://github.com/leoasis/react-sound

#### Server

- express: http://expressjs.com/
- helmet: https://helmetjs.github.io/
- pm2: http://pm2.keymetrics.io/

#### Development

- Webpack: https://webpack.js.org/
- webpack-dev-server: https://github.com/webpack/webpack-dev-server
- Typescript: http://www.typescriptlang.org/
- ESLint: https://eslint.org/
- Prettier: https://prettier.io/
- stop-runaway-react-effects: https://github.com/kentcdodds/stop-runaway-react-effects

### Other

- Font Awesome: https://fontawesome.com/
