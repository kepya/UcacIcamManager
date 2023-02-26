import { Compte } from './../../models/compte';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  @Input() url!: string;
  @Input() isExtended!: boolean;
  compte!: Compte;
  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    this.compte = this.storageService.getUserConnected();
  }

  showMenuChild(content: any) {
    content.classList.toggle("active-link");
  }

  goToUrl(url: string) {
    this.router.navigate(['/' + url]);
  }

}
