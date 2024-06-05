import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExportExcelService } from '../../services/export-excel.service';

@Component({
  selector: 'app-parcours-dialog',
  templateUrl: './parcours-dialog.component.html',
  styles: [
  ]
})
export class ParcoursDialogComponent implements OnInit {
  formations: string[] = [
    "OP",
    "L",
    "IP",
    "I",
    "X",
  ];

  cycles: string[] = [
    "premier",
    "second"
  ];

  public formation!: any;
  public cycle!: any;
  loading: boolean = false;
  @Input() showExportAllCandidature: boolean = true;

  @Output() criteria: EventEmitter<{
    cycle: string,
    formation: string
  }> = new EventEmitter();

  @Input() visible!: boolean;

  constructor(private exportExcelService: ExportExcelService) { }

  ngOnInit(): void {
  }

  validate() {
    if (this.cycle && this.formation) {
      this.criteria.emit({
        cycle: this.cycle,
        formation: this.formation
      });
    }

  }

  exportToExcel() {
    this.loading = true;
    this.exportExcelService.downloadCandidatureExcel().subscribe(response => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
      this.loading = false;
    });
  }
}
