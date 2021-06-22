import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AppBar from 'components/AppBar';
import HomePage from 'components/HomePage';
import UserList from 'components/UserList';

const App = () => (
  <>
    <Router>
      <AppBar />
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/users'} component={UserList} />
      </Switch>
    </Router>
  </>
)

export default App;
