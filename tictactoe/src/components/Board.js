import React, { useEffect } from 'react'
import Tile from './Tile'
import { connect, Provider } from 'react-redux';

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

function mapStateToProps(state) {
  return { 
    marks : state.marks,
    player : state.player,
    gameOver : state.gameOver
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setMarks : (marks) => { 
      dispatch({type : 'SET_MARKS', payload : marks})
    },
    setPlayer : (player) => { 
      dispatch({type : 'SET_PLAYER', payload : player})
    },
    setGameOver : (status) => {
      dispatch({type : 'SET_GAMEOVER', payload : status})
    }
  }
}

function Board({ marks, player, gameOver, setGameOver, setMarks, setPlayer }) {

useEffect(() => {
  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningMoves.forEach(checks => {
    if (marks[checks[0]] === 1 && marks[checks[1]] === 1 && marks[checks[2]] === 1) {
      alert('player 1 wins');
      setGameOver(true)
    }

    if (marks[checks[0]] === 2 && marks[checks[1]] === 2 && marks[checks[2]] === 2) {
      alert('player 2 wins');
      setGameOver(true)
    }
  })

}, [marks])

  function changeMark(i) {
    const icon = [...marks];
    if (icon[i] === 0 && !gameOver) {
      icon[i] = player;
      setMarks(icon)
      setPlayer(player === 1 ? 2 : 1);
    } else {
      alert('Space has been occupied')
    }
  }

  return (
    <div className="board">
      <div>
        <Tile mark={marks[0]} position={0} changeMark={changeMark} />
        <Tile mark={marks[1]} position={1} changeMark={changeMark} />
        <Tile mark={marks[2]} position={2} changeMark={changeMark} />
      </div>
      <div>
        <Tile mark={marks[3]} position={3} changeMark={changeMark} />
        <Tile mark={marks[4]} position={4} changeMark={changeMark} />
        <Tile mark={marks[5]} position={5} changeMark={changeMark} />
      </div>
      <div>
        <Tile mark={marks[6]} position={6} changeMark={changeMark} />
        <Tile mark={marks[7]} position={7} changeMark={changeMark} />
        <Tile mark={marks[8]} position={8} changeMark={changeMark} />
      </div>

    </div>
  )
}

export { Board, BoardContainer };