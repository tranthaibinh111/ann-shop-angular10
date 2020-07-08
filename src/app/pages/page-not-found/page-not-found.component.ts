import { Component, AfterViewInit } from '@angular/core';

// services
import { RootService } from '../../shared/services/root.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements AfterViewInit {
  constructor(public root: RootService) {}

  ngAfterViewInit(): void { }

}
