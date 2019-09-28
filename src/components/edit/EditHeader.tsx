/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Button } from 'react-bootstrap';
import { SIcon } from '../common/FontAwesomeIcon';
import { BackgroundColorLight } from '../../types/colors';

const styles = {
  root: {
    display: 'flex',
    padding: '10px',
    backgroundColor: BackgroundColorLight
  }
};

// type PropTypes = {};

const EditHeader = () => {
  return (
    <div css={css(styles.root)}>
      <Button variant='outline-light'>
        <SIcon name='plus' padding='right' />
        Add
      </Button>
    </div>
  );
};

export default EditHeader;
