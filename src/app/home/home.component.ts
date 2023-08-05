import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../shared/enums/role.enum';
import { Compte } from '../shared/models/compte';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  sites: Zone[] = [];
  searchSites: Zone[] = [];
  loading: boolean = false;
  sortIcon!: string;
  sortProperty!: string;
  isAsc!: boolean;
  downUpIcon!: string;
  searchValue!: string;

  isJury: boolean = false;
  isSuperAdmin: boolean = false;
  isAdmin: boolean = false;

  compte!: Compte;
  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    this.compte = this.storageService.getUserConnected();
    this.isJury = this.compte.role == Role.JURY ? true : false;
    this.isAdmin = this.compte.role == Role.ADMIN ? true : false;
    this.isSuperAdmin = this.compte.role == Role.SUPER_ADMIN ? true : false;
  }

}
