import { Injectable } from '@angular/core';
import { PasswordGeneratorFormInterface } from './password-generator-form-interface';

@Injectable({
  providedIn: 'root'
})
export class PasswordGeneratorService {

  allowRepeatingCharacters: boolean;
  unshuffledPassword: string = "";

  uppercaseLetters: string = "";
  lowercaseLetters: string = "";
  numbers: string = "";
  symbols: string = "";
  arithmeticOperators: string = "";
  specialCharacters: string = "";
  

  generate(formValue: PasswordGeneratorFormInterface): string {
    this.unshuffledPassword = "";

    this.allowRepeatingCharacters = formValue.allowRepeatingCharacters;

    this.uppercaseLetters = formValue.uppercaseLetters;
    this.lowercaseLetters = formValue.lowercaseLetters;
    this.numbers = formValue.numbers;
    this.symbols = formValue.symbols;
    this.arithmeticOperators = formValue.arithmeticOperators;
    this.specialCharacters = formValue.specialCharacters;

    //prefix
    if(formValue.useUppercaseLetters) this.unshuffledPassword += this.getRandom(formValue.uppercaseLetters, 1);
    if(formValue.useLowercaseLetters) this.unshuffledPassword += this.getRandom(formValue.lowercaseLetters, 1);
    if(formValue.useNumbers) this.unshuffledPassword += this.getRandom(formValue.numbers, 1);
    if(formValue.useSymbols) this.unshuffledPassword += this.getRandom(formValue.symbols, 1);
    if(formValue.useArithmeticOperators) this.unshuffledPassword += this.getRandom(formValue.arithmeticOperators, 1);
    if(formValue.useSpecialCharacters) this.unshuffledPassword += this.getRandom(formValue.specialCharacters, 1);
    if(formValue.allowSpaces) this.unshuffledPassword += this.getRandom(" ", 1);

    //suffix
    if(this.unshuffledPassword.length < formValue.passwordLength) {
      let combo = (formValue.useUppercaseLetters ? formValue.uppercaseLetters : "")
      + (formValue.useLowercaseLetters ? formValue.lowercaseLetters : "")
      + (formValue.useNumbers ? formValue.numbers : "")
      + (formValue.useSymbols ? formValue.symbols : "")
      + (formValue.useArithmeticOperators ? formValue.arithmeticOperators : "")
      + (formValue.useSpecialCharacters ? formValue.specialCharacters : "")
      + (formValue.allowSpaces ? " " : "");

      if(!this.allowRepeatingCharacters) {
        combo = this.removeUsed(combo);
        this.unshuffledPassword += this.getRandomUnique(combo, formValue.passwordLength - this.unshuffledPassword.length)        
      } else {
        // repeatitive works
        this.unshuffledPassword += this.getRandom(combo, formValue.passwordLength - this.unshuffledPassword.length)        
      }
    }

    return this.shuffle(this.unshuffledPassword);
  }

  private removeUsed(combo: string): string {
    this.unshuffledPassword.split('').forEach(char => {
      combo = combo.replace(char, '')
    })
    return combo;
  }

  private shuffle(str: string): string {
    if (!str) return ''
    return str.split('').sort((a, b) => Math.random()>.5 ? -1 : 1).join('');
  }

  private getRandom(str: string, len: number): string {
    let randomTxt: string = "";
    
    if(str.length == 0) return randomTxt;
    
    for(let i:number = 0; i < len; i++) {
      randomTxt += this.getRandomChar(str, randomTxt)
    }
    return randomTxt;
  }

  private getRandomUnique(str: string, len: number): string {
    let randomTxt: string = "";
    
    for(let i:number = 0; i < len; i++) {
      let ch = this.getRandomChar(str, randomTxt)
      randomTxt += ch;
      str = str.replace(ch, '')
    }
    return randomTxt;
  }

  private getRandomChar(str: string, randomTxt: string): string {
    let char = str.charAt(Math.floor(Math.random() * str.length))
    return char;
  }
}
