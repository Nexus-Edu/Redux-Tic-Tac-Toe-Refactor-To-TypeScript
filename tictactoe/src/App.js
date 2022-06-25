import './App.css';
import Board from './components/Board';
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
