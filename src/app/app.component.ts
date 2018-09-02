import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import { LoadComponent } from './load/load.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'myAppClient';
  diaRef: MatDialogRef<LoadComponent>;

  constructor(private dialog: MatDialog){
    this.openDia();
  }

  openDia(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = "diaStyle";
    this.diaRef = this.dialog.open(LoadComponent, dialogConfig);
  }

}
