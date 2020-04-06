import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { competitions } from '../competitions';
import { CompetitionInterface } from '../competition-list/competition-list.component';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss']
})

export class CompetitionDetailsComponent implements OnInit {
  competition: CompetitionInterface;
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
      this.competition = competitions[+params.get('competitionId') - 1];
    });

    this.initialValue = this.competition.description;
  }

  ngOnDestroy() {
    this.resetDescription();
  }

}
