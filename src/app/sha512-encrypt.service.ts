import { Injectable } from '@angular/core';
import sha512 from 'sha512'

@Injectable({
  providedIn: 'root'
})
export class Sha512EncryptService {

  constructor() { }

  encrypt(txt: string): string {
    return sha512(txt).toString('hex')
  }
}
