/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Theme } from '../src/components/common/Theme';
import EditHeader from '../src/components/edit/EditHeader';
import EditFooter from '../src/components/edit/EditFooter';
import EditMain from '../src/components/edit/EditMain';

// type PropTypes = {};

const styles = {
  main: {
    flex: 1
  },
  footer: {
    backgroundColor: '#FF0000'
  }
};

const EditPage = () => {
  return (
    <Theme>
      <EditHeader />
      <EditMain _css={css(styles.main)} />
      <EditFooter _css={css(styles.footer)} />
    </Theme>
  );
};

export default EditPage;
