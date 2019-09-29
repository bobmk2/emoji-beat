import * as React from 'react';
import { Button } from 'react-bootstrap';
import { SIcon } from '../common/FontAwesomeIcon';
import { BackgroundColorLight, Border } from '../../types/colors';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    display: 'flex',
    width: '100%',
    padding: '10px',
    backgroundColor: BackgroundColorLight,
    borderBottom: `2px solid ${Border}`,
    overflow: 'hidden'
  }
});

// type PropTypes = {};

const EditHeader = () => {
  return (
    <div className={css(styles.root)}>
      <Button variant='outline-light'>
        <SIcon name='plus' padding='right' />
        Add
      </Button>
    </div>
  );
};

export default EditHeader;
