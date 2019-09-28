import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import EditHeader from '../components/edit/EditHeader';
import EditMain from '../components/edit/EditMain';
import EditFooter from '../components/edit/EditFooter';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: 1
  },
  footer: {
    backgroundColor: '#F00'
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

  return (
    <div className={css(styles.root)}>
      <EditHeader />
      <EditMain
        className={css(styles.main)}
        tempo={tempo}
        isPlayOn={isPlayOn}
        isRepeatOn={isRepeatOn}
        onFinishedOnePlay={handleFinishedOnePlay}
      />
      <EditFooter
        className={css(styles.footer)}
        isRepeatOn={isRepeatOn}
        isPlayOn={isPlayOn}
        tempo={tempo}
        onClickRepeat={handleClickRepeat}
        onClickPlay={handleClickPlay}
      />
    </div>
  );
};

export default EditPage;
