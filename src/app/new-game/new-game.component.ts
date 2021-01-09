import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})

export class NewGameComponent implements OnInit {

  newPlayerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('new game component constructor');
  }

  ngOnInit() {
    console.log('new game component ngoninit');
  }

  onSubmit() {
    console.log(`Your name was entered as ${this.newPlayerForm.get('firstName').value} ` +
    `${this.newPlayerForm.get('lastName').value}`);
  }
}
