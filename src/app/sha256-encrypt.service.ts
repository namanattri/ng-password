import { Injectable } from '@angular/core';
import sha256 from 'sha256'

@Injectable({
  providedIn: 'root'
})
export class Sha256EncryptService {

  constructor() { }

  encrypt(txt: string): string {
    return sha256(txt)
  }
}
