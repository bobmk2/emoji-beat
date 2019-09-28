import { SerializedStyles } from '@emotion/css';
import { useMemo } from 'react';
import { Emoji } from '../../types/enums/emoj';

type PropTypes = {
  _css?: SerializedStyles;
  name: Emoji;
};

const EmojiIcon = (props: PropTypes) => {
  const { name } = props;
  const icon = useMemo(() => {
    switch (name) {
      case Emoji.Sushi:
        return '🍣';
      default:
        return '❓';
    }
  }, [name]);

  return <span css={props._css}>{icon}</span>;
};

export default EmojiIcon;
