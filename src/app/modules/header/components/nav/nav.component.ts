import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';

// modules (third-party)
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// data sample
import { MESSAGE } from '../../../../../data/messages';
import { NOTIFICATION } from '../../../../../data/notifications';

declare var $: any;

@Component({
  selector: 'app-header-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  public showSearch = false;
  notifications = NOTIFICATION;
  mymessages = MESSAGE;

  constructor(private _modalService: NgbModal) { }

  ngAfterViewInit(): void { }
}
