import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Competition } from '../competition';
import { COMPETITIONS } from '../mock-competitions';
import { CompetitionService } from '../competition.service';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss']
})

export class CompetitionDetailsComponent implements OnInit {

  competitions: Competition[];
  currentCompetition: Competition;
  initialValue: string;

  constructor(
    private route: ActivatedRoute,
    private competitionService: CompetitionService
  ) { }

  getCompetitions(): void {
    this.competitionService.getCompetitions()
      .subscribe(competitions => this.competitions = competitions);
  }

  saveDescription(): void {
    // to update
    console.log('save:', this.currentCompetition.description);
  }

  resetDescription(): void {
    this.currentCompetition.description = this.initialValue;
  }

  deleteDescription(): void {
    this.currentCompetition.description = '';
  }

  ngOnInit() {
    this.getCompetitions();
    this.route.paramMap.subscribe(params => {
      this.currentCompetition = COMPETITIONS[+params.get('competitionId') - 1];
    });

    this.initialValue = this.currentCompetition.description;
  }

  ngOnDestroy() {
    this.resetDescription();
  }

}
