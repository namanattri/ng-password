import { Injectable } from '@angular/core';

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

  generate(
    uppercaseLetters: boolean, 
    lowercaseLetters: boolean, 
    numbers: boolean, 
    symbols: boolean, 
    arithmeticOperators: boolean, 
    specialCharacters: boolean,
    
    uppercaseLettersMinLength: number, 
    lowercaseLettersMinLength: number, 
    numbersMinLength: number, 
    symbolsMinLength: number, 
    arithmeticOperatorsMinLength: number, 
    specialCharactersMinLength: number,
    
    passwordLength: number
    ) {    
    let unshuffledPassword: string = "";
    if(uppercaseLetters) unshuffledPassword += this.getRandom(this.validUppercaseLetters, uppercaseLettersMinLength);
    if(lowercaseLetters) unshuffledPassword += this.getRandom(this.validLowercaseLetters, lowercaseLettersMinLength);
    if(numbers) unshuffledPassword += this.getRandom(this.validNumbers, numbersMinLength);
    if(symbols) unshuffledPassword += this.getRandom(this.validSymbols, symbolsMinLength);
    if(arithmeticOperators) unshuffledPassword += this.getRandom(this.validArithmeticOperators, arithmeticOperatorsMinLength);
    if(specialCharacters) unshuffledPassword += this.getRandom(this.validSpecialCharacters, specialCharactersMinLength);

    if(unshuffledPassword.length < passwordLength) {
      unshuffledPassword += this.getRandom(
        uppercaseLetters ? this.validUppercaseLetters : "" 
          + lowercaseLetters ? this.validLowercaseLetters : "" 
          + numbers ? this.validNumbers : "" 
          + symbols ? this.validSymbols : "" 
          + arithmeticOperators ? this.validArithmeticOperators : "" 
          + specialCharacters ? this.validSpecialCharacters : "", 
        passwordLength - unshuffledPassword.length);
    }

    return this.shuffle(unshuffledPassword);
  }

  shuffle(str: string) {
    if (!str) return ''
    return str.split('').sort((a, b) => Math.random()>.5 ? -1 : 1).join('');
  }

  getRandom(str: string, len: number) {
    let randomTxt: string = "";
    for(let i:number = 0; i < len; i++) {
      randomTxt += str.charAt(Math.floor(Math.random() * str.length));
    }
    return randomTxt;
  }
}
