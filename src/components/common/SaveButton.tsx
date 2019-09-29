import * as React from 'react';
import { Button } from 'react-bootstrap';
import { SIcon } from './FontAwesomeIcon';

type PropTypes = {
  className?: string;
  onClick: () => void;
};

const SaveButton = (props: PropTypes) => {
  return (
    <Button className={props.className} size='lg' variant='outline-light' onClick={props.onClick}>
      <SIcon name='save' padding='right' />
      Save
    </Button>
  );
};

export default SaveButton;
