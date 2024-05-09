import { Component, OnInit } from '@angular/core';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Cycle } from 'src/app/shared/enums/cycle.enum';
import { Genre } from 'src/app/shared/enums/genre.enum';
import { Langue } from 'src/app/shared/enums/langue.enum';
import { Role } from 'src/app/shared/enums/role.enum';
import { Statut } from 'src/app/shared/enums/statut.enum';
import { NoteResponse } from 'src/app/shared/models/note';
import { Session } from 'src/app/shared/models/session';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styles: [
  ]
})
export class PlanningComponent implements OnInit {
  entretiens: NoteResponse[] = [];
  loading: boolean = false;
  session!: Session;
  statuses!: any[];

  constructor(public commonService: CommonService, private sessionSrv: SessionExamenService) { }

  ngOnInit(): void {
    this.statuses = this.commonService.getStatuses();

  }

  getEventValue(event: any) {
    return event.target != null ? event.target.value : '';
  }

}
