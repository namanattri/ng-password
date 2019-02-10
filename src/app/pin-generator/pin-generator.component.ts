import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PinGeneratorService } from '../pin-generator.service';
import { CopyToClipboardService } from '../copy-to-clipboard.service';

@Component({
  selector: 'app-pin-generator',
  templateUrl: './pin-generator.component.html',
  styleUrls: ['./pin-generator.component.css']
})
export class PinGeneratorComponent implements OnInit {  

  pinGeneratorForm: FormGroup = new FormGroup({
    fourDigitPin: new FormControl(),
    sixDigitPin: new FormControl(),
    
    allowRepeatingCharacters: new FormControl(),
  })

  constructor(
    private pinGeneratorService: PinGeneratorService, 
    private copyToClipboardService: CopyToClipboardService
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.pinGeneratorForm.patchValue({
      fourDigitPin: '',
      sixDigitPin: '',

      allowRepeatingCharacters: false,
    })
  }

  generate() {
    this.pinGeneratorForm.patchValue({
      fourDigitPin: this.pinGeneratorService.generateFourDigit(this.pinGeneratorForm.value),
      sixDigitPin: this.pinGeneratorService.generateSixDigit(this.pinGeneratorForm.value)
    })
  }

  clear() {
    this.initForm()
  }

  copyFourDigitPinToClipboard() {
    this.copyToClipboard(this.pinGeneratorForm.value.fourDigitPin)
  }

  copySixDigitPinToClipboard() {
    this.copyToClipboard(this.pinGeneratorForm.value.sixDigitPin)
  }

  copyToClipboard(value) {
    this.copyToClipboardService.copyToClipboard(value)
  }

}
