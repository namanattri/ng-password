import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator - Angular';

  validUppercaseLetters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  validLowercaseLetters: string = 'abcdefghijklmnopqrstuvwxyz';
  validNumbers: string = '0123456789';
  validSymbols: string = '!@#$&?';
  validArithmeticOperators: string = '%*+-=/';
  validSpecialCharacters: string = '~^()_`{}|[]\:";\'<>?,.';

  @Input() uppercaseLetters: boolean = true;
  @Input() lowercaseLetters: boolean = true;
  @Input() numbers: boolean = true;
  @Input() symbols: boolean = true;
  @Input() arithmeticOperators: boolean = true;
  @Input() specialCharacters: boolean = true;
  
  @Input() uppercaseLettersMinLength: number = 1;
  @Input() lowercaseLettersMinLength: number = 1;
  @Input() numbersMinLength: number = 1;
  @Input() symbolsMinLength: number = 1;
  @Input() arithmeticOperatorsMinLength: number = 1;
  @Input() specialCharactersMinLength: number = 1;

  @Input() passwordLength: number = 12;

  generatedPassword: string = "";

  generate() {
    let unshuffledPassword: string = "";
    if(this.uppercaseLetters) unshuffledPassword += this.getRandom(this.validUppercaseLetters, this.uppercaseLettersMinLength);
    if(this.lowercaseLetters) unshuffledPassword += this.getRandom(this.validLowercaseLetters, this.lowercaseLettersMinLength);
    if(this.numbers) unshuffledPassword += this.getRandom(this.validNumbers, this.numbersMinLength);
    if(this.symbols) unshuffledPassword += this.getRandom(this.validSymbols, this.symbolsMinLength);
    if(this.arithmeticOperators) unshuffledPassword += this.getRandom(this.validArithmeticOperators, this.arithmeticOperatorsMinLength);
    if(this.specialCharacters) unshuffledPassword += this.getRandom(this.validSpecialCharacters, this.specialCharactersMinLength);

    if(unshuffledPassword.length < this.passwordLength) {
      unshuffledPassword += this.getRandom(
        this.uppercaseLetters ? this.validUppercaseLetters : "" 
          + this.lowercaseLetters ? this.validLowercaseLetters : "" 
          + this.numbers ? this.validNumbers : "" 
          + this.symbols ? this.validSymbols : "" 
          + this.arithmeticOperators ? this.validArithmeticOperators : "" 
          + this.specialCharacters ? this.validSpecialCharacters : "", 
        this.passwordLength - unshuffledPassword.length);
    }

    this.generatedPassword = this.shuffle(unshuffledPassword);
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
