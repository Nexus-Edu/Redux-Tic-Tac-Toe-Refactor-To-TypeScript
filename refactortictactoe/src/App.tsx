import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, Provider } from 'react-redux';
import store from './redux/store'
import { BoardContainer } from './components/Board';

function App() {
  return (
    <Provider store={store}>
    <div className="App Welcome-Message">
      <BoardContainer />
      <h1 className="heading">Welcome to my Tic-Tac-Toe Game</h1>
    </div>
    </Provider>
  );
}

export default App;
