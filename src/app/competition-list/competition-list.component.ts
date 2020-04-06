import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { competitions } from '../competitions';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})

export class CompetitionListComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'distance', 'date', 'details'];
  dataSource = new MatTableDataSource<CompetitionInterface>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface CompetitionInterface {
  name: string;
  position: number;
  distance: number;
  date: string;
  description ?: string;
}

const ELEMENT_DATA: CompetitionInterface[] = competitions;
