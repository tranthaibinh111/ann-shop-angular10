import { Component, OnInit } from '@angular/core';

// modules (third-party)
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};

  constructor() { }

  ngOnInit(): void { }
}
