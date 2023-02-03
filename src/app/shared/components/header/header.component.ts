import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  @Output() extendEvent = new EventEmitter<boolean>();
  isExtend: boolean = true;
  constructor() { }
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Paramètres', icon: 'pi pi-settings', routerLink: '/logout' },
      {
        label: 'Se deconnecter', icon: 'pi pi-sign-out', command: () => {
          ;
        }
      },
    ];
  }

  displaySidebar() {
    this.isExtend = !this.isExtend;
    this.extendEvent.emit(this.isExtend);
  }

}
