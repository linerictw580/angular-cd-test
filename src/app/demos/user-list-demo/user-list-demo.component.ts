import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser.model';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-user-list-demo',
  templateUrl: './user-list-demo.component.html',
  styleUrls: ['./user-list-demo.component.scss'],
})
export class UserListDemoComponent implements OnInit {
  users: IUser[];

  constructor() {}

  ngOnInit(): void {
    this.users = Array(3)
      .fill(null)
      .map(() => this.generateUserData());
  }

  generateUserData(): IUser {
    return {
      name: faker.name.findName(),
      job: faker.name.jobTitle(),
      phone: faker.phone.phoneNumber('09##-###-###'),
    };
  }

  onChangeName() {
    this.users.forEach((user) => {
      user.name = faker.name.findName();
    });
    console.table(this.users);
  }
}
