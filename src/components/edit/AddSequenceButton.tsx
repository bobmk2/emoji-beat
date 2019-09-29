import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { RIcon } from '../common/FontAwesomeIcon';
import { Button } from 'react-bootstrap';

const styles = StyleSheet.create({
  addSequenceButton: {
    width: '100%',
    height: '50px',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px'
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

type PropTypes = {
  onClick: () => void;
};

const AddSequenceButton = (props: PropTypes) => {
  return (
    <Button size='lg' variant='outline-light' className={css(styles.addSequenceButton)} onClick={props.onClick}>
      <div className={css(styles.text)}>
        <span>
          <RIcon name='plus' padding='right' />
          Add
        </span>
      </div>
    </Button>
  );
};

export default AddSequenceButton;
