import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Competition } from '../competition';
import { COMPETITIONS } from '../mock-competitions';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss']
})

export class CompetitionDetailsComponent implements OnInit {

  competition: Competition;
  initialValue: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  saveDescription(): void {
    // to update
    console.log('save:', this.competition.description);
  }

  resetDescription(): void {
    this.competition.description = this.initialValue;
  }

  deleteDescription(): void {
    this.competition.description = '';
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.competition = COMPETITIONS[+params.get('competitionId') - 1];
    });

    this.initialValue = this.competition.description;
  }

  ngOnDestroy() {
    this.resetDescription();
  }

}
