import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'distance', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  distance: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Maratonul International Bucuresti', distance: 42, date: '01-Mar-21'},
  {position: 2, name: 'Maraton Ciucas', distance: 33, date: '02-Mar-21'},
  {position: 3, name: 'History Run', distance: 12, date: '03-Mar-21'},
  {position: 4, name: 'Maratonul Nisipului', distance: 27, date: '04-Mar-21'},
  {position: 5, name: 'Semimaraton Pitesti', distance: 31, date: '05-Mar-21'},
  {position: 6, name: 'Parangul Night Challenge', distance: 45, date: '06-Mar-21'},
  {position: 7, name: 'Iasi in Trail', distance: 51, date: '07-Mar-21'},
  {position: 8, name: 'Alerg in Dumbrava', distance: 14, date: '08-Mar-21'},
  {position: 9, name: 'Maratonul Dacilor', distance: 9, date: '09-Mar-21'},
  {position: 10, name: 'Visit Covasna Marathon', distance: 111, date: '10-Mar-21'},
  {position: 11, name: 'Feleacu Running Hills', distance: 22, date: '11-Mar-21'},
  {position: 12, name: 'Hoia Baciu Night Run', distance: 24, date: '12-Mar-21'},
  {position: 13, name: 'Carpathia Trails', distance: 21, date: '13-Mar-21'},
  {position: 14, name: 'Maratonul Argonautilor', distance: 20, date: '14-Mar-21'},
  {position: 15, name: 'Retezat Sky Race', distance: 57, date: '15-Mar-21'},
  {position: 16, name: 'Baneasa Forest Run', distance: 66, date: '16-Mar-21'},
  {position: 17, name: 'Maratonul International Cluj', distance: 69, date: '17-Mar-21'},
  {position: 18, name: 'Thermal Trail Race', distance: 100, date: '18-Mar-21'},
  {position: 19, name: 'Baia Mare Half Marathon', distance: 5, date: '19-Mar-21'},
  {position: 20, name: 'Oltenia Forest Run', distance: 47, date: '20-Mar-21'},
];
