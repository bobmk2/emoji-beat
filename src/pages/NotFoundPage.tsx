import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type PropTypes = RouteComponentProps;

const NotFoundPage = (props: PropTypes) => {
  const { location } = props;
  return (
    <div style={{ padding: '20px' }}>
      <h3>404 Not Found</h3>
      <p>
        <span>The requested URL </span>
        {location.pathname}
        <span> was not found on this server.</span>
      </p>
    </div>
  );
};

export default NotFoundPage;
