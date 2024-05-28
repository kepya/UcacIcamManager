import { Component, Input } from '@angular/core';

@Component({
  selector: 'uci-filling-progression',
  templateUrl: './filling-progression.component.html',
  styles: [
  ]
})
export class FillingProgressionComponent {
   @Input() step!: number;
}
