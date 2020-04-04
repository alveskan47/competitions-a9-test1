import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  otherTheme = false;

  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
