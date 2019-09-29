import * as React from 'react';
import { Button } from 'react-bootstrap';
import { SIcon } from './FontAwesomeIcon';
import CustomButton from './CustomButton';
import { ButtonSize, ButtonVariant } from '../../types/enums/react-bootstrap';

type PropTypes = {
  className?: string;
  disabled: boolean;
  onClick: () => void;
};

const SaveButton = (props: PropTypes) => {
  return (
    <CustomButton
      disabled={props.disabled}
      className={props.className}
      size={ButtonSize.LARGE}
      variant={ButtonVariant.OUTLINE_LIGHT}
      onClick={props.onClick}
      disabledReason={'No changes'}
    >
      <SIcon name='save' padding='right' />
      Save
    </CustomButton>
  );

  return (
    <Button className={props.className} size='lg' variant='outline-light' onClick={props.onClick}>
      <SIcon name='save' padding='right' />
      Save
    </Button>
  );
};

export default SaveButton;
