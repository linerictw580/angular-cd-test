import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { getName } from 'src/app/utils/fake.utils';
import { HttpClient } from '@angular/common/http';

export abstract class AbstractCDComponent {
  protected constructor(
    private _el: ElementRef<any>,
    private _zone: NgZone,
    public cdr: ChangeDetectorRef,
    private _http: HttpClient
  ) {}

  name: string;

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

  rerender() {
    const nativeElement = this._el.nativeElement as HTMLElement;
    const matCard = nativeElement.getElementsByTagName('mat-card')[0];
    matCard.classList.add('highlight');

    // 可跳脫 Ng Zone 來確保這裡做的事情不會觸發 Angular Change Detection
    this._zone.runOutsideAngular(() => {
      const timeout = setTimeout(() => {
        matCard.classList.remove('highlight');
        clearTimeout(timeout);
      }, 1000);
    });
  }
}
