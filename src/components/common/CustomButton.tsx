import * as React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { TooltipPlacement, ButtonSize, ButtonVariant } from '../../types/enums/react-bootstrap';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  disabledButton: {},
  span: {},
  button: {
    pointerEvents: 'none'
  }
});

type OwnProps = {
  id?: string; // ツールチップに利用するid
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  disabled?: boolean; // 無効設定
  disabledReason?: React.ReactNode | string; // 無効時にカーソルが乗った際に表示する文字列
  tooltipPlacement?: TooltipPlacement;
  onClick: () => void; // クリック時の振る舞い
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type PropTypes = OwnProps;

/**
 * disabledの際にカーソルが乗った際にメッセージを表示するボタン
 */
class CustomButton extends React.PureComponent<PropTypes> {
  static defaultProps = {
    id: 'cbutton-tooltip-id',
    disabled: false,
    disabledReason: ''
  };

  render() {
    const {
      id,
      className,
      style,
      children,
      disabled,
      tooltipPlacement: placement,
      disabledReason,
      onClick,
      size,
      variant
    } = this.props;

    if (typeof disabled === 'undefined' ? false : disabled) {
      if (disabledReason) {
        return (
          <OverlayTrigger
            overlay={<Tooltip id={id ? id : 'undefined-id'}>{disabledReason}</Tooltip>}
            placement={placement}
          >
            <span className={[css(styles.span)].join(' ')}>
              <Button
                style={style}
                className={[css(styles.button), className].join(' ')}
                size={size}
                variant={variant}
                disabled
              >
                {children}
              </Button>
            </span>
          </OverlayTrigger>
        );
      }
      return (
        <Button
          style={style}
          className={[css(styles.button), className].join(' ')}
          size={size}
          variant={variant}
          disabled
        >
          {children}
        </Button>
      );
    }

    return (
      <Button className={className} style={style} onClick={onClick} size={size} variant={variant}>
        {children}
      </Button>
    );
  }
}

export default CustomButton;
