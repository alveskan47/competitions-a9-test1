import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { competitions } from '../competitions';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.css']
})
export class CompetitionDetailsComponent implements OnInit {
  competition;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.competition = competitions[+params.get('competitionId') - 1];
    });
  }

}
