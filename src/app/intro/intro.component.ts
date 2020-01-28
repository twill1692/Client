import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<IntroComponent>,
    private route: ActivatedRoute, private router: Router) {
      console.log('intro component constructor');
  }

  ngOnInit(): void {
    console.log('intro component ngoninit');
  }

  newGame() {
    console.log('you clicked new game.');
    this.dialogRef.close();
    this.router.navigate(['level-one']);
  }

  loadGame() {
    console.log('you clicked load game');
  }
}
