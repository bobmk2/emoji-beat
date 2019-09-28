// import { NextJSContext } from 'next-redux-wrapper';
import moment from 'moment';

type PropTypes = {
  currentDate: Date;
};

const IndexPage = (props: PropTypes) => {
  return (
    <div>
      <div>Index page</div>
      <div>{moment(props.currentDate).format()}</div>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  const date = new Date();
  return { currentDate: date };
};

export default IndexPage;
