import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import EditHeader from '../components/edit/EditHeader';
import EditMain from '../components/edit/EditMain';
import EditFooter from '../components/edit/EditFooter';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    maxHeight: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  header: {
    height: '70px'
  },
  main: {
    flex: 1,
    flexGrow: 1,
    flexBasis: 0,
    overflowY: 'auto'
  },
  footer: {
    height: '100px'
  }
});

const EditPage = () => {
  const [tempo, setTempo] = React.useState(60);
  const [isRepeatOn, setIsRepeatOn] = React.useState(false);
  const [isPlayOn, setIsPlayOn] = React.useState(false);

  const handleClickRepeat = React.useCallback((isOn: boolean) => {
    setIsRepeatOn(isOn);
  }, []);

  const handleClickPlay = React.useCallback((isOn: boolean) => {
    setIsPlayOn(isOn);
  }, []);

  const handleFinishedOnePlay = React.useCallback(() => {
    setIsPlayOn(false);
  }, []);

  const handleChangeTempo = React.useCallback((tempo: number) => {
    setTempo(tempo);
  }, []);

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.header)}>
        <EditHeader />
      </div>
      <div className={css(styles.main)}>
        <EditMain tempo={tempo} isPlayOn={isPlayOn} isRepeatOn={isRepeatOn} onFinishedOnePlay={handleFinishedOnePlay} />
      </div>
      <div className={css(styles.footer)}>
        <EditFooter
          className={css(styles.footer)}
          isRepeatOn={isRepeatOn}
          isPlayOn={isPlayOn}
          tempo={tempo}
          onClickRepeat={handleClickRepeat}
          onClickPlay={handleClickPlay}
          onChangeTempo={handleChangeTempo}
        />
      </div>
    </div>
  );
};

export default EditPage;
