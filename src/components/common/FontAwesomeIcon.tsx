import * as React from 'react';

type OwnProps = {
  name: string;
  padding: 'none' | 'left' | 'right' | 'both';
  paddingValue: string | number;
};

function RegularAwesomeIcon(props: OwnProps) {
  let style;
  switch (props.padding) {
    case 'both':
      style = { paddingLeft: props.paddingValue, paddingRight: props.paddingValue };
      break;
    case 'left':
      style = { paddingLeft: props.paddingValue };
      break;
    case 'right':
      style = { paddingRight: props.paddingValue };
      break;
    default:
      style = { padding: 0 };
  }
  return <i className={`far fa-${props.name}`} style={style} aria-hidden='true' />;
}

RegularAwesomeIcon.defaultProps = {
  padding: 'none',
  paddingValue: '4px'
};

function SolidAwesomeIcon(props: OwnProps) {
  let style;
  switch (props.padding) {
    case 'both':
      style = { paddingLeft: props.paddingValue, paddingRight: props.paddingValue };
      break;
    case 'left':
      style = { paddingLeft: props.paddingValue };
      break;
    case 'right':
      style = { paddingRight: props.paddingValue };
      break;
    default:
      style = { padding: 0 };
  }
  return <i className={`fas fa-${props.name}`} style={style} aria-hidden='true' />;
}

SolidAwesomeIcon.defaultProps = {
  padding: 'none',
  paddingValue: '4px'
};

const RIcon = RegularAwesomeIcon;
const SIcon = SolidAwesomeIcon;

export { RegularAwesomeIcon, SolidAwesomeIcon, RIcon, SIcon };
