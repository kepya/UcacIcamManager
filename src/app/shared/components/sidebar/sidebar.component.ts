import { Compte } from './../../models/compte';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { Role } from '../../enums/role.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  @Input() url!: string;
  @Input() isExtended!: boolean;

  isJury: boolean = false;
  isComptable: boolean = false;
  isSuperAdmin: boolean = false;
  isAdmin: boolean = false;

  compte!: Compte;
  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    this.compte = this.storageService.getUserConnected();
    this.isJury = this.compte.role == Role.JURY ? true : false;
    this.isAdmin = this.compte.role == Role.ADMIN ? true : false;
    this.isSuperAdmin = this.compte.role == Role.SUPER_ADMIN ? true : false;
    this.isComptable = this.compte.role == Role.COMPTABLE ? true : false;
  }

  showMenuChild(content: any) {
    content.classList.toggle("active-link");
  }

  displaySidebar() {
    this.isExtended = !this.isExtended;
  }

  goToUrl(url: string) {
    this.router.navigate(['/' + url]);
  }

}
