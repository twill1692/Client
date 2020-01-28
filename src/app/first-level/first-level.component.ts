import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-level',
  templateUrl: './first-level.component.html',
  styleUrls: ['./first-level.component.css']
})

export class FirstLevelComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('first level component constructor');
  }

  ngOnInit() {
    console.log('first level component ngoninit');
  }

}
