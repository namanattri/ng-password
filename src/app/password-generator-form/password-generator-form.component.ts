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

  passwordLengthMin: number = 16
  passwordLengthMax: number = 200

  passwordGeneratorForm: FormGroup = new FormGroup({
    useUppercaseLetters: new FormControl(),
    useLowercaseLetters: new FormControl(),
    useNumbers: new FormControl(),
    useSymbols: new FormControl(),
    useArithmeticOperators: new FormControl(),
    useSpecialCharacters: new FormControl(),
    allowSpaces: new FormControl(),
    allowRepeatingCharacters: new FormControl(),

    uppercaseLetters: new FormControl(),
    lowercaseLetters: new FormControl(),
    numbers: new FormControl(),
    symbols: new FormControl(),
    arithmeticOperators: new FormControl(),
    specialCharacters: new FormControl(),

    passwordLength: new FormControl(),

    generatedPassword: new FormControl()
  })

  generatedPassword: string = "";

  constructor(
    private passwordGeneratorService: PasswordGeneratorService, 
    private copyToClipboardService: CopyToClipboardService
  ) { }

  ngOnInit() {
    this.initForm()

    this.passwordGeneratorForm.valueChanges.subscribe(formState => {
      if(!formState.allowRepeatingCharacters) {
        this.passwordLengthMax = formState.uppercaseLetters.length +
          formState.lowercaseLetters.length +
          formState.numbers.length +
          formState.symbols.length +
          formState.arithmeticOperators.length +
          formState.specialCharacters.length
      } else {
        this.passwordLengthMax = 200
      }

      // if current selected length is > max set it to max
      if(formState.passwordLength > this.passwordLengthMax)
      this.passwordGeneratorForm.patchValue({
        passwordLength: this.passwordLengthMax
      })
    })
  }

  initForm() {    
    this.passwordGeneratorForm.patchValue({
      useUppercaseLetters: true,
      useLowercaseLetters: true,
      useNumbers: true,
      useSymbols: true,
      useArithmeticOperators: true,
      useSpecialCharacters: true,
      allowSpaces: false,
      allowRepeatingCharacters: false,

      uppercaseLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercaseLetters: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$&?',
      arithmeticOperators: '%*+-=/',
      specialCharacters: '~^()_`{}|[]\:";<>,.\'',

      passwordLength: 16,
  
      generatedPassword: ''
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

  resetForm() {
    this.initForm()
  }

}
