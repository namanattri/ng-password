import { Injectable } from '@angular/core';
import { PasswordGeneratorFormInterface } from './password-generator-form-interface';
import { ShufflerService } from './shuffler.service';
import { RandomGeneratorService } from './random-generator.service';

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

  constructor(
    protected shufflerService: ShufflerService,
    protected randomGeneratorService: RandomGeneratorService
  ) {}
  

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
    if(formValue.useUppercaseLetters) this.unshuffledPassword += this.randomGeneratorService.getRandom(formValue.uppercaseLetters, 1);
    if(formValue.useLowercaseLetters) this.unshuffledPassword += this.randomGeneratorService.getRandom(formValue.lowercaseLetters, 1);
    if(formValue.useNumbers) this.unshuffledPassword += this.randomGeneratorService.getRandom(formValue.numbers, 1);
    if(formValue.useSymbols) this.unshuffledPassword += this.randomGeneratorService.getRandom(formValue.symbols, 1);
    if(formValue.useArithmeticOperators) this.unshuffledPassword += this.randomGeneratorService.getRandom(formValue.arithmeticOperators, 1);
    if(formValue.useSpecialCharacters) this.unshuffledPassword += this.randomGeneratorService.getRandom(formValue.specialCharacters, 1);
    if(formValue.allowSpaces) this.unshuffledPassword += this.randomGeneratorService.getRandom(" ", 1);

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
        this.unshuffledPassword += this.randomGeneratorService.getRandomUnique(combo, formValue.passwordLength - this.unshuffledPassword.length)        
      } else {
        // repeatitive works
        this.unshuffledPassword += this.randomGeneratorService.getRandom(combo, formValue.passwordLength - this.unshuffledPassword.length)        
      }
    }

    return this.shufflerService.shuffle(this.unshuffledPassword);
  }

  protected removeUsed(combo: string): string {
    this.unshuffledPassword.split('').forEach(char => {
      combo = combo.replace(char, '')
    })
    return combo;
  }
}
