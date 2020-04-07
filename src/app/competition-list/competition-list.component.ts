import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Competition } from '../competition';
import { COMPETITIONS } from '../mock-competitions';
import { CompetitionService } from '../competition.service';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})

export class CompetitionListComponent implements OnInit {

  constructor(private competitionService: CompetitionService) {}

  competitions: Competition[];
  displayedColumns: string[] = ['position', 'name', 'distance', 'date', 'details'];
  dataSource = new MatTableDataSource<Competition>(COMPETITIONS);

  getCompetitions(): void {
    this.competitionService.getCompetitions()
      .subscribe(competitions => this.competitions = competitions);
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getCompetitions();
    this.dataSource.paginator = this.paginator;
  }

}
