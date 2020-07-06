import { Component, Input, Inject, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible: boolean = true;

  @Input()
  public backgroundColor: string = 'rgba(0, 115, 170, 0.69)';

  constructor(
    private _router: Router,
    @Inject(DOCUMENT)
    private _document: Document
  ) {
    this._router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.isSpinnerVisible = false;
        }
      },
      () => {
        this.isSpinnerVisible = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }

}
