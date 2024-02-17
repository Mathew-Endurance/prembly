// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CovidStats from './CovidStats';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CovidStats />
      </div>
    </Provider>
  );
}

export default App;
