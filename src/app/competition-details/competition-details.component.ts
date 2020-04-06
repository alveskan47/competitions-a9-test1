import { Component, OnInit } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.competition = competitions[+params.get('competitionId') - 1];
    });
  }

}
