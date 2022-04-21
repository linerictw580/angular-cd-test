import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  title = 'User Card';
  @Input() id: string = 'default-id';
  @Input() name: { firstName: string; lastName: string } = {
    firstName: 'firstName',
    lastName: 'lastName',
  };

  @Output() changeId = new EventEmitter();
  @Output() changeFirstName = new EventEmitter();
  @Output() changeLastName = new EventEmitter();
  @Output() changeWholeName = new EventEmitter();

  private _logStyles = 'color: #bada55; background: #222; font-size: 14px; font-weight: bold;';

  private _changeDetected = false;
  private _oldFirstName: string;
  private _oldLastName: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this._changeDetected = true;
    console.log(`[Lifecycle Demo] app-user-card %cngOnChanges`, this._logStyles);
    for (const prop in changes) {
      const change = changes[prop];
      const cur = JSON.stringify(change.currentValue);
      const prev = JSON.stringify(change.previousValue);
      console.log(
        `[Lifecycle Demo] app-user-card changes\n[${prop}]: currentValue = %c${cur}%c, previousValue = %c${prev}`,
        'color: lightgreen; background: #222;',
        'color: black;',
        'color: pink; background: #222;'
      );
      // console.log(`[Lifecycle Demo] app-user-card changes\n${prop}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
    console.log(`[Lifecycle Demo] app-user-card %cngOnInit`, this._logStyles);
    // 取消註解 debugger 以查看 ngOnInit 觸發時，有部分的 Component 尚未被 render 出來
    // (HTML Template 有使用到 string interpolation 的部分不會被 render 出來)
    // debugger;
  }

  ngDoCheck(): void {
    this.customChangeCheck(false);
  }

  ngOnDestroy(): void {
    console.log(`[Lifecycle Demo] app-user-card %cngOnDestroy`, this._logStyles);
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

  customChangeCheck(showChangeDetail: boolean) {
    let changeLog = '';
    if (this.name.firstName !== this._oldFirstName) {
      this._changeDetected = true;
      changeLog = `[Lifecycle Demo] app-user-card Custom Do Check\n[firstName]: currentValue = %c${this.name.firstName}%c, previousValue = %c${this._oldFirstName}`;
      this._oldFirstName = this.name.firstName;
    }

    if (this.name.lastName !== this._oldLastName) {
      this._changeDetected = true;
      changeLog = `[Lifecycle Demo] app-user-card Custom Do Check\n[lastName]: currentValue = %c${this.name.lastName}%c, previousValue = %c${this._oldLastName}`;
      this._oldLastName = this.name.lastName;
    }

    if (this._changeDetected) {
      console.log(`[Lifecycle Demo] app-user-card %cngDoCheck`, this._logStyles);
      if (showChangeDetail) {
        console.log(
          changeLog,
          'color: lightgreen; background: #222;',
          'color: black;',
          'color: pink; background: #222;'
        );
      }
    } else {
      console.log(`[Lifecycle Demo] app-user-card %cngDoCheck: no changes`, this._logStyles);
    }
    this._changeDetected = false;
  }
}
