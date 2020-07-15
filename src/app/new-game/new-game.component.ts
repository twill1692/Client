import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs-compat';
// import { onErrorResumeNext } from 'rxjs-compat/operator/onErrorResumeNext';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})

export class NewGameComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('new game component constructor');
  }

  ngOnInit() {
    console.log('new game component ngoninit');
  }

}
