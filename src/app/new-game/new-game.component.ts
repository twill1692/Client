import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Player } from '../models/player.model';
import { Store, select } from '@ngrx/store';
import { selectPlayer } from '../state/player.selectors';
import { createPlayer } from './new-game.action';
import { Subscriber, Subscription } from 'rxjs-compat';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})

export class NewGameComponent implements OnInit {
  //Returns observable.
  player$ = this.store.pipe(select(selectPlayer));
  player: Player;
  playerSub: Subscription;
  newPlayerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private router: Router, private store: Store) {
    console.log('new game component constructor');
  }

  savePlayer(player) {
    console.log(player);
    this.store.dispatch(createPlayer({ player }));
    //You have to subcribe to get at the value, but its there in the observable object.
    console.log(this.player$);
    this.playerSub = this.player$.subscribe({
      next(value) {
        console.log(value);
      }
    });
  }
  ngOnInit() {
    console.log('new game component ngoninit');
  }

  onSubmit() {
    this.player = {
      firstName: this.newPlayerForm.get('firstName').value,
      lastName: this.newPlayerForm.get('lastName').value
    }
    this.savePlayer(this.player);
  }
}
