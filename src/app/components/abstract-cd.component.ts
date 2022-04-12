import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export abstract class AbstractCDComponent {
  protected constructor(
    protected _el: ElementRef<any>,
    protected _zone: NgZone,
    public cdr: ChangeDetectorRef,
    protected _http: HttpClient
  ) {}

  name: string;

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
