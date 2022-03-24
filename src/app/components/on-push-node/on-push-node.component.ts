import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractCDComponent } from 'src/app/abstract-cd.component';
import { IButton } from 'src/app/models/IButton.model';

@Component({
  selector: 'app-on-push-node',
  templateUrl: './on-push-node.component.html',
  styleUrls: ['./on-push-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushNodeComponent extends AbstractCDComponent implements OnInit, OnChanges {

  @Input() title: string = 'Card Title';
  buttons: IButton[] = [
    {
      label: 'Property Change',
      color: 'primary',
      onClick: this.triggerPropertyChange.bind(this)
    },
    {
      label: 'Async Property Change',
      color: 'primary',
      onClick: this.triggerAsyncPropertyChange.bind(this)
    },
    {
      label: 'setTimeout',
      color: 'primary',
      onClick: this.triggerSetTimeout.bind(this)
    },
    {
      label: 'setInterval',
      color: 'primary',
      onClick: this.triggerSetInterval.bind(this)
    },
    {
      label: 'Empty Button',
      color: 'primary',
      onClick: () => {}
    },
    {
      label: 'Detach',
      color: 'accent',
      onClick: this.triggerDetach.bind(this)
    },
    {
      label: 'Reattach',
      color: 'accent',
      onClick: this.triggerReattach.bind(this)
    },
  ];

  constructor(_el: ElementRef<any>, _zone: NgZone, cdr: ChangeDetectorRef, _http: HttpClient) {
    super(_el, _zone, cdr, _http);
  }

  ngOnInit(): void {
    this.triggerPropertyChange();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

}