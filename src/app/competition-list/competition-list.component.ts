import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Competition } from '../competition';
import { COMPETITIONS } from '../mock-competitions';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})

export class CompetitionListComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'distance', 'date', 'details'];
  dataSource = new MatTableDataSource<Competition>(COMPETITIONS);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
