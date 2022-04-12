import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
} from '@angular/core';
import faker from '@faker-js/faker';
import { IUser } from 'src/app/models/IUser.model';
import { AbstractCDComponent } from '../abstract-cd.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent extends AbstractCDComponent implements OnInit {
  @Input() users: IUser[];
  displayedColumns: string[] = ['name', 'job', 'phone', 'actions'];

  constructor(_el: ElementRef<any>, _zone: NgZone, cdr: ChangeDetectorRef, _http: HttpClient) {
    super(_el, _zone, cdr, _http);
  }

  ngOnInit(): void {}

  onChangeName(todo: IUser) {
    // console.log(todo);
    // this._zone.run(() => {
    const index = this.users.indexOf(todo);
    this.users[index].name = faker.name.findName();
    console.table(this.users);
    // });
  }
}
