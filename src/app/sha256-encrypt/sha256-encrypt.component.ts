import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CopyToClipboardService } from '../copy-to-clipboard.service';
import { Sha256EncryptService } from '../sha256-encrypt.service';

@Component({
  selector: 'app-sha256-encrypt',
  templateUrl: './sha256-encrypt.component.html',
  styleUrls: ['./sha256-encrypt.component.css']
})
export class Sha256EncryptComponent implements OnInit {

  sha256EncryptForm: FormGroup = new FormGroup({
    sha256InputText: new FormControl(),
    sha256OutputText: new FormControl(),
  })

  constructor(
    private sha256EncryptService: Sha256EncryptService,
    private copyToClipboardService: CopyToClipboardService
  ) { }

  ngOnInit() {
    this.sha256EncryptForm.patchValue({
      sha256InputText: '',
      sha256OutputText: '',
    })
  }

  encypt() {    
    this.sha256EncryptForm.patchValue({
      sha256OutputText: this.sha256EncryptService.encrypt(this.sha256EncryptForm.get('sha256InputText').value),
    })
  }

  clear() {
    this.sha256EncryptForm.patchValue({
      sha256InputText: '',
      sha256OutputText: '',
    })
  }

  copyToClipboard() {
    this.copyToClipboardService.copyToClipboard(this.sha256EncryptForm.get('sha256OutputText').value)
  }
  
}
