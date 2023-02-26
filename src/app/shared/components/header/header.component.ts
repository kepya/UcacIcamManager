import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Compte } from '../../models/compte';
import { StorageService } from '../../services/storage.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  @Output() extendEvent = new EventEmitter<boolean>();
  isExtend: boolean = true;

  constructor(private storageService: StorageService, private messageService: MessageService) { }

  items: MenuItem[] = [];
  compte!: Compte;

  ngOnInit() {
    this.compte = this.storageService.getUserConnected();

    this.items = [
      { label: 'Paramètres', icon: 'pi pi-settings', routerLink: '/logout' },
      {
        label: 'Se deconnecter', icon: 'pi pi-sign-out', command: () => {
          this.logout();
        }
      },
    ];
  }

  displaySidebar() {
    this.isExtend = !this.isExtend;
    this.extendEvent.emit(this.isExtend);
  }

  logout() {
    this.messageService.add({ severity: 'success', summary: 'Déconnexion', detail: 'Déconnexion effectuée avec success' });
    this.storageService.clear();
  }
}
