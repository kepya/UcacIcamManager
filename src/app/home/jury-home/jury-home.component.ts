import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Table } from 'primeng/table';
import { Cycle } from 'src/app/shared/enums/cycle.enum';
import { Genre } from 'src/app/shared/enums/genre.enum';
import { Langue } from 'src/app/shared/enums/langue.enum';
import { Role } from 'src/app/shared/enums/role.enum';
import { Statut } from 'src/app/shared/enums/statut.enum';
import { Candidature, Compte } from 'src/app/shared/models/compte';
import { Entretien, NoteResponse } from 'src/app/shared/models/note';
import { Session } from 'src/app/shared/models/session';
import { StatCandidatures } from 'src/app/shared/models/stat-candidature';
import { CommonService } from 'src/app/shared/services/common.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-jury-home',
  templateUrl: './jury-home.component.html',
  styles: [
  ]
})
export class JuryHomeComponent implements OnInit, AfterViewInit {
  loading: boolean = false;
  entretiens: Entretien[] = [];

  public chart: any;
  @Input() statCandidatures!: StatCandidatures;
  @Input() session!: Session;
  @Input() nextSession!: Session;
  @Input() compteARebour!: number;

  @Input() datasetsCandidatEntretenuParZone!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsCandidatEntretenuParZone!: string[];

  @Input() datasetsCandidatEntretenuParSite!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsCandidatEntretenuParSite!: string[];

  @Input() datasetsCandidatEntretenuParConcour!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsCandidatEntretenuParConcour!: string[];

  compte!: Compte;

  statuses!: any[];

  constructor( private storageService: StorageService, private noteService: NoteService, public commonService: CommonService) { }

  ngAfterViewInit(): void {
    this.createChartCandidatByConcour();
  }

  ngOnInit(): void {
    this.compte = this.storageService.getUserConnected();
    this.statuses = this.commonService.getStatuses();
this.getEntretiens();
  }
    
  getEntretiens() {
    this.noteService.liste().subscribe({
      next: (result: NoteResponse[]) => {
        let entretiens:Entretien[] = result.map((v) => {
          return {
            id: v!.id ?? 0,
            candidat: v.candidature.compte?.name + ' ' + v.candidature.compte?.prenom,
            commentaires: v.commentaires, 
            done: v.done,
            cycle: v.candidature!.cycle.toString(),
            centre: v.candidature?.centre || '',
            jury: v.compte?.name + ' ' + v.compte?.prenom,
            candidature: v.candidature as unknown as Candidature,
            debut_entretien: new Date(v.debut_entretien),
            fin_entretien: new Date(v.fin_entretien),
          };
        });

        this.entretiens = entretiens.filter(e => e.jury == (this.compte.name + ' ' + this.compte.prenom))
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  createChartCandidatByConcour() {
    this.chart = new Chart("MyConcourChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labelsCandidatEntretenuParConcour,
        datasets: this.datasetsCandidatEntretenuParConcour
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  getEventValue(event: any) {
    return event.target != null ? event.target.value : '';
  }
  
}
