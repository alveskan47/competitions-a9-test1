import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  allUsers: User[];

  ngOnInit(): void {
    this.fetchResults();
  }

  fetchResults(): void {
    // page #1, 10 users
    this.userService.getUsers(1, 10).subscribe(result => {
      this.allUsers = result.data.map(user => new User(user.id, user.email, user.first_name, user.last_name));
    });
  }
}
