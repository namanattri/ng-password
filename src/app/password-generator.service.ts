import { Injectable } from '@angular/core';
import { PasswordGeneratorFormInterface } from './password-generator-form-interface';

@Injectable({
  providedIn: 'root'
})
export class PasswordGeneratorService {
  
  private validUppercaseLetters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private validLowercaseLetters: string = 'abcdefghijklmnopqrstuvwxyz';
  private validNumbers: string = '0123456789';
  private validSymbols: string = '!@#$&?';
  private validArithmeticOperators: string = '%*+-=/';
  private validSpecialCharacters: string = '~^()_`{}|[]\:";\'<>?,.';

  generate(formValue: PasswordGeneratorFormInterface) {    
    let unshuffledPassword: string = "";
    if(formValue.uppercaseLetters) unshuffledPassword += this.getRandom(this.validUppercaseLetters, formValue.uppercaseLettersMinLength);
    if(formValue.lowercaseLetters) unshuffledPassword += this.getRandom(this.validLowercaseLetters, formValue.lowercaseLettersMinLength);
    if(formValue.numbers) unshuffledPassword += this.getRandom(this.validNumbers, formValue.numbersMinLength);
    if(formValue.symbols) unshuffledPassword += this.getRandom(this.validSymbols, formValue.symbolsMinLength);
    if(formValue.arithmeticOperators) unshuffledPassword += this.getRandom(this.validArithmeticOperators, formValue.arithmeticOperatorsMinLength);
    if(formValue.specialCharacters) unshuffledPassword += this.getRandom(this.validSpecialCharacters, formValue.specialCharactersMinLength);

    if(unshuffledPassword.length < formValue.passwordLength) {
      unshuffledPassword += this.getRandom(
        formValue.uppercaseLetters ? this.validUppercaseLetters : "" 
          + formValue.lowercaseLetters ? this.validLowercaseLetters : "" 
          + formValue.numbers ? this.validNumbers : "" 
          + formValue.symbols ? this.validSymbols : "" 
          + formValue.arithmeticOperators ? this.validArithmeticOperators : "" 
          + formValue.specialCharacters ? this.validSpecialCharacters : "", 
          formValue.passwordLength - unshuffledPassword.length);
    }

    return this.shuffle(unshuffledPassword);
  }

  private shuffle(str: string) {
    if (!str) return ''
    return str.split('').sort((a, b) => Math.random()>.5 ? -1 : 1).join('');
  }

  private getRandom(str: string, len: number) {
    let randomTxt: string = "";
    for(let i:number = 0; i < len; i++) {
      randomTxt += str.charAt(Math.floor(Math.random() * str.length));
    }
    return randomTxt;
  }
}
