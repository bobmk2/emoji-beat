import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';

type OwnProps = {};

type PropTypes = OwnProps;

class App extends React.Component<PropTypes> {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/edit' component={EditPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
