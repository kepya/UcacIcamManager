import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() criteria: EventEmitter<{
    cycle: string,
    formation: string
  }> = new EventEmitter();

  @Input() visible!: boolean;

  constructor() { }

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

}
