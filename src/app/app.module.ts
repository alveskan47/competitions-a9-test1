import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { TestPageComponent } from './test-page/test-page.component';
import { CompetitionDetailsComponent } from './competition-details/competition-details.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    CompetitionListComponent,
    LandingPageComponent,
    TestPageComponent,
    CompetitionDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'competition-list', component: CompetitionListComponent },
      { path: 'test-page', component: TestPageComponent },
      { path: 'competition/:competitionId', component: CompetitionDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
