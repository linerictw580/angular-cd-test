import { Component, OnInit } from '@angular/core';
import faker from '@faker-js/faker';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.scss'],
})
export class LifecycleDemoComponent implements OnInit {
  id: string;
  name: { firstName: string; lastName: string };

  constructor() {}

  ngOnInit(): void {
    this.id = this.getId();
    this.name = this.getName();
  }

  getId() {
    return faker.datatype.uuid();
  }

  getName() {
    return {
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
    };
  }

  getFirstName() {
    return faker.name.firstName();
  }

  getLastName() {
    return faker.name.lastName();
  }

  onChangeId() {
    this.id = this.getId();
  }

  onChangeFirstName() {
    this.name.firstName = this.getFirstName();
  }

  onChangeLastName() {
    this.name.lastName = this.getLastName();
  }

  onChangeWholeName() {
    // this.name = this.getName();
    this.name = { ...this.name };
  }
}
