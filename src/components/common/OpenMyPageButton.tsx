import * as React from 'react';
import { Button } from 'react-bootstrap';
import { SIcon } from './FontAwesomeIcon';

type PropTypes = {
  className?: string;
  disabled: boolean;
  onClick: () => void;
};

const OpenMyPageButton = (props: PropTypes) => {
  return (
    <Button className={props.className} size='lg' variant='outline-success' onClick={props.onClick}>
      <SIcon name='user-edit' padding='right' />
      Open my page
    </Button>
  );
};

OpenMyPageButton.defaultProps = {
  disabled: false
};

export default OpenMyPageButton;
