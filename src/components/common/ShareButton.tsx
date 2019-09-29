import * as React from 'react';
import { Button } from 'react-bootstrap';
import { SIcon } from './FontAwesomeIcon';

type PropTypes = {
  onClick: () => void;
};

const ShareButton = (props: PropTypes) => {
  return (
    <Button size='lg' variant='outline-info' onClick={props.onClick}>
      <SIcon name='share-alt' padding='right' />
      Share
    </Button>
  );
};

export default ShareButton;
