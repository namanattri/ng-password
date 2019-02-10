import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CopyToClipboardService } from '../copy-to-clipboard.service';
import { Sha1EncryptService } from '../sha1-encrypt.service';

@Component({
  selector: 'app-sha1-encrypt',
  templateUrl: './sha1-encrypt.component.html',
  styleUrls: ['./sha1-encrypt.component.css']
})
export class Sha1EncryptComponent implements OnInit {

  sha1EncryptForm: FormGroup = new FormGroup({
    sha1InputText: new FormControl(),
    sha1OutputText: new FormControl(),
  })

  constructor(
    private sha1EncryptService: Sha1EncryptService,
    private copyToClipboardService: CopyToClipboardService
  ) { }

  ngOnInit() {
    this.sha1EncryptForm.patchValue({
      sha1InputText: '',
      sha1OutputText: '',
    })
  }

  encypt() {    
    this.sha1EncryptForm.patchValue({
      sha1OutputText: this.sha1EncryptService.encrypt(this.sha1EncryptForm.get('sha1InputText').value),
    })
  }

  clear() {
    this.sha1EncryptForm.patchValue({
      sha1InputText: '',
      sha1OutputText: '',
    })
  }

  copyToClipboard() {
    this.copyToClipboardService.copyToClipboard(this.sha1EncryptForm.get('sha1OutputText').value)
  }
  
}
