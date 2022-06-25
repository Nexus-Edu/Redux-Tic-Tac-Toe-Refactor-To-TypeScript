const intitalState = {
    marks : [0, 0, 0, 0, 0, 0, 0, 0, 0],
    player : 1,
    gameOver : false
};

export default function reducer(state = intitalState, action) {
    if (action.type === 'SET_PLAYER') {
        return { ...state, player: action.payload }
    } else if (action.type === 'SET_MARKS') {
        return { ...state, marks: action.payload }
    } else if (action.type === 'SET_GAMEOVER') {
        return { ...state, gameOver: action.payload }
    }
     else {
        return state;
    }
};