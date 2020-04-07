import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Competition } from './competition';
import { COMPETITIONS } from './mock-competitions';


@Injectable({
  providedIn: 'root'
})

export class CompetitionService {

  getCompetitions(): Observable<Competition[]> {
    return of (COMPETITIONS);
  }

  constructor() { }
}
