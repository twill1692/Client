import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  profile :FormGroup; 

  constructor(private dialogRef: MatDialogRef<LoadComponent>) {
      this.profile = new FormGroup({
        name: new FormControl(''),
        charClass: new FormControl('')
      });
    }

  ngOnInit() {
    console.log("Hello from oninit");
  }
}
