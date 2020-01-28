import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FirstLevelComponent } from './first-level/first-level.component';

const appRouts: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'level-one', component: FirstLevelComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FirstLevelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRouts,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [IntroComponent]
})
export class AppModule { }
