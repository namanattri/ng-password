import { Injectable } from '@angular/core';
import { PasswordGeneratorFormInterface } from './password-generator-form-interface';

@Injectable({
  providedIn: 'root'
})
export class PasswordGeneratorService {

  allowRepeatingCharacters: boolean;

  generate(formValue: PasswordGeneratorFormInterface) {    
    let unshuffledPassword: string = "";
    this.allowRepeatingCharacters = formValue.allowRepeatingCharacters;

    if(formValue.useUppercaseLetters) unshuffledPassword += this.getRandom(formValue.uppercaseLetters, 1);
    if(formValue.useLowercaseLetters) unshuffledPassword += this.getRandom(formValue.lowercaseLetters, 1);
    if(formValue.useNumbers) unshuffledPassword += this.getRandom(formValue.numbers, 1);
    if(formValue.useSymbols) unshuffledPassword += this.getRandom(formValue.symbols, 1);
    if(formValue.useArithmeticOperators) unshuffledPassword += this.getRandom(formValue.arithmeticOperators, 1);
    if(formValue.useSpecialCharacters) unshuffledPassword += this.getRandom(formValue.specialCharacters, 1);
    if(formValue.allowSpaces) unshuffledPassword += this.getRandom(" ", 1);

    if(unshuffledPassword.length < formValue.passwordLength) {
      unshuffledPassword += this.getRandom(
        (formValue.useUppercaseLetters ? formValue.uppercaseLetters : "")
          + (formValue.useLowercaseLetters ? formValue.lowercaseLetters : "")
          + (formValue.useNumbers ? formValue.numbers : "")
          + (formValue.useSymbols ? formValue.symbols : "")
          + (formValue.useArithmeticOperators ? formValue.arithmeticOperators : "")
          + (formValue.useSpecialCharacters ? formValue.specialCharacters : "")
          + (formValue.allowSpaces ? " " : ""),
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
    console.log("string: ", str)
    for(let i:number = 0; i < len; i++) {
      randomTxt += this.getRandomChar(str, randomTxt)
    }
    return randomTxt;
  }

  private getRandomChar(str: string, randomTxt: string){
    let char = str.charAt(Math.floor(Math.random() * str.length))

    if(!this.allowRepeatingCharacters && randomTxt.includes(char)) return this.getRandomChar(str, randomTxt)
    else return char;
  }
}
