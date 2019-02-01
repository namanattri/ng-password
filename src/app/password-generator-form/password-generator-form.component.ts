import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PasswordGeneratorService } from '../password-generator.service';

@Component({
  selector: 'app-password-generator-form',
  templateUrl: './password-generator-form.component.html',
  styleUrls: ['./password-generator-form.component.css']
})
export class PasswordGeneratorFormComponent implements OnInit {

  passwordGeneratorForm: FormGroup = new FormGroup({
    uppercaseLetters: new FormControl(true),
    lowercaseLetters: new FormControl(true),
    numbers: new FormControl(true),
    symbols: new FormControl(true),
    arithmeticOperators: new FormControl(true),
    specialCharacters: new FormControl(true),
    uppercaseLettersMinLength: new FormControl(1),
    lowercaseLettersMinLength: new FormControl(1),
    numbersMinLength: new FormControl(1),
    symbolsMinLength: new FormControl(1),
    arithmeticOperatorsMinLength: new FormControl(1),
    specialCharactersMinLength: new FormControl(1),
    passwordLength: new FormControl(12),
  })

  generatedPassword: string = "";

  constructor(private passwordGeneratorService: PasswordGeneratorService) { }

  ngOnInit() {
  }

  generate() {
    console.log(this.passwordGeneratorForm.value);

    this.generatedPassword = this.passwordGeneratorService.generate(this.passwordGeneratorForm.value);
  }

}
