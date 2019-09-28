/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core';
import { Button } from 'react-bootstrap';
import { SIcon } from '../common/FontAwesomeIcon';
import { BackgroundColorLight } from '../../types/colors';
// const styles = {
//   root: {
//     display: 'flex',
//     padding: '10px',
//     backgroundColor: BackgroundColorLight
//   }
// };

const root = css`
  display: flex;
  padding: 10px;
  background-color: ${BackgroundColorLight};
`;

type PropTypes = {
  style?: React.CSSProperties;
  _css?: SerializedStyles;
};

const EditFooter = (props: PropTypes) => {
  return (
    <div css={[root, props._css]}>
      <Button variant='outline-light'>
        <SIcon name='plus' padding='right' />
        Add
      </Button>
    </div>
  );
};

export default EditFooter;
