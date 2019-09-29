import * as React from 'react';
import { Emoji } from '../../types/enums/emoji';
import { emojiSetting } from '../../types/values/emoji-setting';

type PropTypes = {
  className?: string;
  name: Emoji;
};

const EmojiIcon = (props: PropTypes) => {
  const { name } = props;
  const icon = React.useMemo(() => {
    const setting = emojiSetting(name);
    return setting ? setting.value : '❓';
  }, [name]);

  return <span className={props.className}>{icon}</span>;
};

export default EmojiIcon;
