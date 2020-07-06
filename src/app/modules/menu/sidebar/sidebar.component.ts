import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// modules (third-party)
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// interfaces
import { MenuItem } from '../../../shared/interfaces/menu-item';

// data sample
import { MENUITEMS } from '../../../../data/menu-items';

declare var $: any;

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public menuItems: MenuItem[];

  constructor(
    private _modalService: NgbModal,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.menuItems = MENUITEMS.filter(items => items);
  }

  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }

  }

  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
