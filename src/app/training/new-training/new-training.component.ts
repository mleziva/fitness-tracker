import { Component, OnInit, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  exercises = [
    { value: 'crunches', viewValue: 'Crunches' },
    { value: 'touch-toes', viewValue: 'Touch Toes' },
  ]
  @Output() trainingStart = new EventEmitter<void>()
  constructor() {}

  ngOnInit(): void {}
  onStartTraining() {
    this.trainingStart.emit()
  }
}
