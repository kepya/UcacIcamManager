import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parcours-dialog',
  templateUrl: './parcours-dialog.component.html',
  styles: [
  ]
})
export class ParcoursDialogComponent implements OnInit {
  formations: string[] = [
    "Ingénieur généraliste parcours international",
    "Ingénieur généraliste par apprentissage ou génie des procédés",
    "Ingénieur genie des procédés",
    "Ingénieur géneraliste parcours international et innovation",
    "Ingénieur génie Informtique",
  ];

  cycles: string[] = [
    "Premier",
    "Second"
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
