import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PasswordGeneratorService } from '../password-generator.service';
import { CopyToClipboardService } from '../copy-to-clipboard.service';

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
    allowRepeatingCharacters: new FormControl(false),

    uppercaseLetters: new FormControl('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
    lowercaseLetters: new FormControl('abcdefghijklmnopqrstuvwxyz'),
    numbers: new FormControl('0123456789'),
    symbols: new FormControl('!@#$&?'),
    arithmeticOperators: new FormControl('%*+-=/'),
    specialCharacters: new FormControl('~^()_`{}|[]\:";<>?,.\'"'),

    passwordLength: new FormControl(16),


    generatedPassword: new FormControl('')
  })

  generatedPassword: string = "";

  constructor(
    private passwordGeneratorService: PasswordGeneratorService, 
    private copyToClipboardService: CopyToClipboardService
  ) { }

  ngOnInit() {

    this.passwordGeneratorForm.valueChanges.subscribe(val => {
      console.log(val)
    })
  }

  generate() {
    console.log(this.passwordGeneratorForm.value);

    this.passwordGeneratorForm.patchValue({
      generatedPassword: this.passwordGeneratorService.generate(this.passwordGeneratorForm.value)
    })

    this.generatedPassword = this.passwordGeneratorService.generate(this.passwordGeneratorForm.value);
  }

  copyToClipboard() {
    this.copyToClipboardService.copyToClipboard(this.passwordGeneratorForm.value.generatedPassword)
  }

  passwordLengthChange(value: number) {
    this.passwordGeneratorForm.patchValue({
      passwordLength: value
    })
  }

}
