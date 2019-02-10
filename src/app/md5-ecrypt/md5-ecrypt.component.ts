import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Md5EncyptService } from '../md5-encypt.service';
import { CopyToClipboardService } from '../copy-to-clipboard.service';

@Component({
  selector: 'app-md5-ecrypt',
  templateUrl: './md5-ecrypt.component.html',
  styleUrls: ['./md5-ecrypt.component.css']
})
export class Md5EcryptComponent implements OnInit {

  md5EncryptForm: FormGroup = new FormGroup({
    md5InputText: new FormControl(),
    md5OutputText: new FormControl(),
  })

  constructor(
    private md5EncryptService: Md5EncyptService,
    private copyToClipboardService: CopyToClipboardService
  ) { }

  ngOnInit() {
    this.md5EncryptForm.patchValue({
      md5InputText: '',
      md5OutputText: '',
    })
  }

  encypt() {    
    this.md5EncryptForm.patchValue({
      md5OutputText: this.md5EncryptService.encrypt(this.md5EncryptForm.get('md5InputText').value),
    })
  }

  clear() {
    this.md5EncryptForm.patchValue({
      md5InputText: '',
      md5OutputText: '',
    })
  }

  copyToClipboard() {
    this.copyToClipboardService.copyToClipboard(this.md5EncryptForm.get('md5OutputText').value)
  }
  
}
