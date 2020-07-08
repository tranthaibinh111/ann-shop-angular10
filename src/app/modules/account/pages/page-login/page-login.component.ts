import { Component, OnInit } from '@angular/core';

// services
import { RootService } from '../../../../shared/services/root.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  constructor(public root: RootService) { }

  ngOnInit(): void { }
}
