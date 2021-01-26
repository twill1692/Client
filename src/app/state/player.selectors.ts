import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Player } from "../models/player.model";

//This all seems wrong
export const select = (state: AppState) => state.player;

export const selectPlayer = createSelector(
  (state: AppState) => state.player,
  (player: Player) => player
);
