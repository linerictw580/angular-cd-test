import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription, timer } from 'rxjs';
import { AbstractCDComponent } from 'src/app/components/abstract-cd.component';
import { IButton } from 'src/app/models/IButton.model';
import { getName } from 'src/app/utils/fake.utils';

@Component({
  selector: 'app-node-base',
  templateUrl: './node-base.component.html',
  styleUrls: ['./node-base.component.scss'],
})
export class NodeBaseComponent extends AbstractCDComponent implements OnInit, DoCheck, OnDestroy {
  @Input() strategy: string;
  @Input() title: string = 'Card Title';
  name: string;

  buttons: IButton[] = [
    // {
    //   label: 'Property Change',
    //   color: 'primary',
    //   onClick: this.triggerPropertyChange.bind(this),
    //   emitInZone: false,
    // },
    // {
    //   label: 'Async Property Change',
    //   color: 'primary',
    //   emitInZone: false,
    //   onClick: this.triggerAsyncPropertyChange.bind(this),
    // },
    {
      label: 'setTimeout',
      color: 'primary',
      emitInZone: false,
      onClick: this.triggerSetTimeout.bind(this),
    },
    {
      label: 'setInterval',
      color: 'primary',
      emitInZone: false,
      onClick: this.triggerSetInterval.bind(this),
    },
    {
      label: 'Emit Event',
      color: 'primary',
      onClick: this.triggerEmitEvent.bind(this),
      emitInZone: true,
    },
    {
      label: 'Observable',
      color: 'primary',
      onClick: this.triggerObservable.bind(this),
      emitInZone: false,
    },
    // {
    //   label: 'Detach',
    //   color: 'accent',
    //   onClick: this.triggerDetach.bind(this),
    // },
    // {
    //   label: 'Reattach',
    //   color: 'accent',
    //   onClick: this.triggerReattach.bind(this),
    // },
  ];

  @ViewChild('checkbox', { static: true }) checkbox: ElementRef;
  private _checkboxSub: Subscription;

  constructor(_el: ElementRef<any>, _zone: NgZone, cdr: ChangeDetectorRef, _http: HttpClient) {
    super(_el, _zone, cdr, _http);
  }

  ngOnInit(): void {
    // this.triggerPropertyChange();
    this._zone.runOutsideAngular(() => {
      this._checkboxSub = fromEvent(this.checkbox.nativeElement, 'click').subscribe(() => {
        this.displayRerender = !this.displayRerender;
      });
    });
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    this._checkboxSub.unsubscribe();
  }

  onNormalBtnClick($event) {
    console.log('on button clicked');
  }

  onNoCdClick($event) {
    console.log('on no detection button clicked');
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
    this._zone.run(() => {
      console.log('set timeout');
      const timeout = setTimeout(() => {
        console.log('on timeout');
        clearTimeout(timeout);
      }, 2000);
    });
  }

  triggerSetInterval() {
    this._zone.run(() => {
      console.log('set interval');
      const interval = setInterval(() => {
        console.log('on interval');
        // clearInterval(interval);
      }, 2000);
    });
  }

  triggerEmitEvent() {
    console.log('emit event');
  }

  triggerObservable() {
    // this._zone.run(() => {
    //   this._http
    //     .get<{ name: string }>(`./assets/async-data/async-data.json`)
    //     .pipe(delay(2000))
    //     .subscribe((res) => {
    //       console.log('observable next');
    //     });
    // });
    timer(2000).subscribe(() => {
      console.log('observable next');
    });
  }

  triggerDetach() {
    this.cdr.detach();
  }

  triggerReattach() {
    this.cdr.reattach();
  }
}
