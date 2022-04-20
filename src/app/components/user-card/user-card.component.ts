import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnChanges, OnInit {
  @Input() id: string = 'default-id';
  @Input() name: { firstName: string; lastName: string } = {
    firstName: 'firstName',
    lastName: 'lastName',
  };

  @Output() changeId = new EventEmitter();
  @Output() changeFirstName = new EventEmitter();
  @Output() changeLastName = new EventEmitter();
  @Output() changeWholeName = new EventEmitter();

  private _logStyles = 'color: #bada55; background: #222';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`app-user-card %cngOnChanges`, this._logStyles);
    console.log(`app-user-card`, JSON.parse(JSON.stringify(changes)));
  }

  ngOnInit(): void {
    console.log(`app-user-card %cngOnInit`, this._logStyles);
  }

  onChangeId() {
    this.changeId.emit();
  }

  onChangeFirstName() {
    this.changeFirstName.emit();
  }

  onChangeLastName() {
    this.changeLastName.emit();
  }

  onChangeWholeName() {
    this.changeWholeName.emit();
  }
}
