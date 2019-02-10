import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShufflerService {

  constructor() { }

  shuffle(str: string): string {
    if (!str) return ''
    return str.split('').sort((a, b) => Math.random()>.5 ? -1 : 1).join('');
  }
}
