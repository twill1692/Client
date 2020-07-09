import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs-compat';
// import { onErrorResumeNext } from 'rxjs-compat/operator/onErrorResumeNext';

@Component({
  selector: 'app-first-level',
  templateUrl: './first-level.component.html',
  styleUrls: ['./first-level.component.css']
})

export class FirstLevelComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('first level component constructor');

    //step one, a subscriber 
  }

  ngOnInit() {
    console.log('first level component ngoninit');
  }

}
