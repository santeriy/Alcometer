import { Component } from '@angular/core';
import { AlcometerService } from '../alcometer.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number
  gender: number
  time: number
  bottles: number
  prom: number

  constructor(private alcometerService: AlcometerService) { }

  calculate() {
    this.alcometerService.setWeight(this.weight);
    this.alcometerService.setGender(this.gender);
    this.alcometerService.setBottles(this.bottles);
    this.alcometerService.setTime(this.time);
    this.alcometerService.calculate();
  }

  ionViewDidEnter() {
    this.alcometerService.ionViewDidEnter();
  }
}
