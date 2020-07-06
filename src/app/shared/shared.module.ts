import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules (third-party)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    // modules (angular)
    CommonModule,
    // modules third-party
    NgbModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }
