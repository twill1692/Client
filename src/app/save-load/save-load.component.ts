import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'save-load',
  templateUrl: './save-load.component.html',
  styleUrls: ['./save-load.component.css']
})

export class SaveLoadComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SaveLoadComponent>,
    private route: ActivatedRoute, private router: Router) {
      console.log('save-load component constructor');
  }

  ngOnInit(): void {
    console.log('save-load component ngoninit');
  }

  newGame() {
    console.log('you clicked new game.');
    this.dialogRef.close();
    this.router.navigate(['new-game']);
  }

  loadGame() {
    console.log('you clicked load game');
  }
}
