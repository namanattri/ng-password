import { Component, Input } from '@angular/core';
import { PasswordGeneratorService } from './password-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator - Angular';

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

  constructor(private passwordGeneratorService: PasswordGeneratorService) {}

  generate() {

    this.generatedPassword = this.passwordGeneratorService.generate(
      this.uppercaseLetters,
      this.lowercaseLetters,
      this.numbers,
      this.symbols,
      this.arithmeticOperators,
      this.specialCharacters,

      this.uppercaseLettersMinLength,
      this.lowercaseLettersMinLength,
      this.numbersMinLength,
      this.symbolsMinLength,
      this.arithmeticOperatorsMinLength,
      this.specialCharactersMinLength,
      
      this.passwordLength
    )
  }
}
