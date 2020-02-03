import { Injectable } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AlcometerService {

  private weight = 0;
  private gender = 0;
  private time = 0;
  private bottles = 0;
  private prom = 0;

  constructor() { }

  public time_arr: Array<any> = []
  public bottles_arr: Array<any> = []

  ionViewDidEnter() {

    for (let i = 0; i < 24; i++) {
      this.time_arr[i] = {
        "value": 1 + i,
        "description": 1 + i
      }
    }

    for (let i = 0; i < 30; i++) {
      this.bottles_arr[i] = {
        "value": 1 + i,
        "description": 1 + i
      }
    }
  }

  public calculate() {

    let grams: number,
      litres: number,
      burning: number

    burning = this.weight / 10
    litres = this.bottles * 0.33
    grams = litres * 8 * 4.5
    grams = grams - (burning * this.time)

    if (this.gender == 1) {
      this.prom = grams / (this.weight * 0.6)
    } else if (this.gender == 2) {
      this.prom = grams / (this.weight * 0.7)
    } else {
      console.log("error!!")
    }
  }

  public setWeight(value) {
    this.weight = value;
  }

  public setGender(value) {
    this.gender = value;
  }

  public setTime(value) {
    this.time = value;
  }

  public setBottles(value) {
    this.bottles = value;
  }

  public getProm() {
    return this.prom;
  }
}
