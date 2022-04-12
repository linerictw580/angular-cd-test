import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'ng-out-button',
  templateUrl: './ng-out-button.component.html',
  styleUrls: ['./ng-out-button.component.scss'],
})
export class NgOutButtonComponent implements OnInit, OnDestroy {
  @Input() label: string;
  @Output() noCdClick = new EventEmitter();

  @ViewChild('btn', { static: true }) button: ElementRef;

  private _subscription: Subscription;

  constructor(private _zone: NgZone) {}

  ngOnInit(): void {
    this._zone.runOutsideAngular(() => {
      this._subscription = fromEvent(this.button.nativeElement, 'click').subscribe((e) => {
        // this._zone.run(() => {
        this.noCdClick.emit();
        // });
      });
    });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
