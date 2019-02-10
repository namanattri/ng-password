import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomGeneratorService {

  constructor() { }

  public getRandom(str: string, len: number): string {
    let randomTxt: string = "";
    
    if(str.length == 0) return randomTxt;
    
    for(let i:number = 0; i < len; i++) {
      randomTxt += this.getRandomChar(str, randomTxt)
    }
    return randomTxt;
  }

  public getRandomUnique(str: string, len: number): string {
    let randomTxt: string = "";
    
    for(let i:number = 0; i < len; i++) {
      let ch = this.getRandomChar(str, randomTxt)
      randomTxt += ch;
      str = str.replace(ch, '')
    }
    return randomTxt;
  }

  protected getRandomChar(str: string, randomTxt: string): string {
    let char = str.charAt(Math.floor(Math.random() * str.length))
    return char;
  }
}
