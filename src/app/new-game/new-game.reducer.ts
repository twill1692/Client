import { createReducer, on, Action } from '@ngrx/store';
import { createPlayer } from './new-game.action';
import { Player } from '../models/player.model';

export const initialState = Player;

export const playerReducer = createReducer(
  initialState,
  on(createPlayer, (state, { player }) => Player)
);
