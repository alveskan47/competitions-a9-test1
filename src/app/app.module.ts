import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { TestPageComponent } from './test-page/test-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    CompetitionListComponent,
    LandingPageComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'competition-list', component: CompetitionListComponent },
      { path: 'test-page', component: TestPageComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
