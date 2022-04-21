import { Component, OnInit } from '@angular/core';
import faker from '@faker-js/faker';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.scss'],
})
export class LifecycleDemoComponent implements OnInit {
  displayCard: boolean;
  id: string;
  name: { firstName: string; lastName: string };

  constructor() {}

  ngOnInit(): void {
    this.displayCard = false;
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

  onCreateCard() {
    this.displayCard = true;
  }

  onTriggerTimeout() {
    console.log('[Lifecycle Demo] timeout start');
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      console.log('[Lifecycle Demo] timeout end');
    }, 1000);
  }

  onTriggerInterval(max: number) {
    console.log('[Lifecycle Demo] interval start');
    let count = 0;
    const interval = setInterval(() => {
      count++;
      console.log('[Lifecycle Demo] interval', count);
      if (count === max) {
        clearInterval(interval);
        console.log('[Lifecycle Demo] interval end');
      }
    }, 1000);
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
    this.name = this.getName();
    // this.name = { ...this.name };
  }

  onDestroyCard() {
    this.displayCard = false;
  }
}
