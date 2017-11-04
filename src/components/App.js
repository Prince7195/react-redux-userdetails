import React from 'react';

import { UserList, UserDetails } from '../containers';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Username List: </h2>
        <UserList />
        <hr />
        <h2>User Details: </h2>
        <UserDetails />
      </div>
    );
  }
}

export default App;
