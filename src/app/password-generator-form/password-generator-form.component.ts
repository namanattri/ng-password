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
    useUppercaseLetters: new FormControl(true),
    useLowercaseLetters: new FormControl(true),
    useNumbers: new FormControl(true),
    useSymbols: new FormControl(true),
    useArithmeticOperators: new FormControl(true),
    useSpecialCharacters: new FormControl(true),
    allowSpaces: new FormControl(false),

    uppercaseLetters: new FormControl('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
    lowercaseLetters: new FormControl('abcdefghijklmnopqrstuvwxyz'),
    numbers: new FormControl('0123456789'),
    symbols: new FormControl('!@#$&?'),
    arithmeticOperators: new FormControl('%*+-=/'),
    specialCharacters: new FormControl('~^()_`{}|[]\:";<>?,.\'"'),

    passwordLength: new FormControl(16),

    allowRepeatingCharacters: new FormControl(false)
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
