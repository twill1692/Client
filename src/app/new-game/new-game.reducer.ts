import { createReducer, on, Action } from '@ngrx/store';
import { createPlayer } from './new-game.action';


export interface State {
  Player: {
    firstName: String,
    lastName: String
  }
}

export const initialState: State = {
  Player: {
    firstName: 'default',
    lastName: 'Player'
  }
};

// export const playerReducer = createReducer(
// //stuff
// );
