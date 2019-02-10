import { Injectable } from '@angular/core';
import sha1 from 'sha1'

@Injectable({
  providedIn: 'root'
})
export class Sha1EncryptService {

  constructor() { }

  encrypt(txt: string): string {
    return sha1(txt)
  }
}
