import { createAction, props } from '@ngrx/store';
import {Player} from '../models/player.model'

export const createPlayer = createAction(
  '[NewGameComponent] Create',
  props<{ player: Player }>()
);
