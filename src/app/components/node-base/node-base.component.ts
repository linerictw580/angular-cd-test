import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AbstractCDComponent } from 'src/app/components/abstract-cd.component';
import { IButton } from 'src/app/models/IButton.model';
import { ITodo } from 'src/app/models/Todo.model';
import { getName } from 'src/app/utils/fake.utils';

@Component({
  selector: 'app-node-base',
  templateUrl: './node-base.component.html',
  styleUrls: ['./node-base.component.scss'],
})
export class NodeBaseComponent extends AbstractCDComponent implements OnInit, OnChanges {
  @Input() strategy: string;
  @Input() title: string = 'Card Title';
  buttons: IButton[] = [
    {
      label: 'Property Change',
      color: 'primary',
      onClick: this.triggerPropertyChange.bind(this),
    },
    {
      label: 'Async Property Change',
      color: 'primary',
      onClick: this.triggerAsyncPropertyChange.bind(this),
    },
    {
      label: 'setTimeout',
      color: 'primary',
      onClick: this.triggerSetTimeout.bind(this),
    },
    {
      label: 'setInterval',
      color: 'primary',
      onClick: this.triggerSetInterval.bind(this),
    },
    {
      label: 'Empty Button',
      color: 'primary',
      onClick: () => {},
    },
    {
      label: 'Detach',
      color: 'accent',
      onClick: this.triggerDetach.bind(this),
    },
    {
      label: 'Reattach',
      color: 'accent',
      onClick: this.triggerReattach.bind(this),
    },
  ];

  todos: ITodo[] = [{ id: 1, description: 'abc', completed: true }];

  constructor(_el: ElementRef<any>, _zone: NgZone, cdr: ChangeDetectorRef, _http: HttpClient) {
    super(_el, _zone, cdr, _http);
  }

  ngOnInit(): void {
    this.triggerPropertyChange();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  onNoCdClick($event) {
    console.log('on noCdClick');
    // const interval = setInterval(() => {
    //   // clearInterval(interval);
    //   console.log('interval');
    // }, 1000);
  }

  triggerPropertyChange() {
    this.name = getName();
  }

  triggerAsyncPropertyChange() {
    this._http.get<{ name: string }>(`./assets/async-data/async-data.json`).subscribe((res) => {
      this.name = `${res.name}`;
    });
  }

  triggerSetTimeout() {
    const timeout = setTimeout(() => clearTimeout(timeout), 0);
  }

  triggerSetInterval() {
    const interval = setInterval(() => clearInterval(interval), 0);
  }

  triggerDetach() {
    this.cdr.detach();
  }

  triggerReattach() {
    this.cdr.reattach();
  }
}
