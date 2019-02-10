import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CopyToClipboardService } from '../copy-to-clipboard.service';
import { Sha512EncryptService } from '../sha512-encrypt.service';

@Component({
  selector: 'app-sha512-encrypt',
  templateUrl: './sha512-encrypt.component.html',
  styleUrls: ['./sha512-encrypt.component.css']
})
export class Sha512EncryptComponent implements OnInit {

  sha512EncryptForm: FormGroup = new FormGroup({
    sha512InputText: new FormControl(),
    sha512OutputText: new FormControl(),
  })

  constructor(
    private sha512EncryptService: Sha512EncryptService,
    private copyToClipboardService: CopyToClipboardService
  ) { }

  ngOnInit() {
    this.sha512EncryptForm.patchValue({
      sha512InputText: '',
      sha512OutputText: '',
    })
  }

  encypt() {    
    this.sha512EncryptForm.patchValue({
      sha512OutputText: this.sha512EncryptService.encrypt(this.sha512EncryptForm.get('sha512InputText').value),
    })
  }

  clear() {
    this.sha512EncryptForm.patchValue({
      sha512InputText: '',
      sha512OutputText: '',
    })
  }

  copyToClipboard() {
    this.copyToClipboardService.copyToClipboard(this.sha512EncryptForm.get('sha512OutputText').value)
  }
  
}
