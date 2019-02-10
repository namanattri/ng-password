import { Injectable } from '@angular/core';
import md5 from 'md5';

@Injectable({
  providedIn: 'root'
})
export class Md5EncyptService {

  constructor() { }

  encrypt(txt: string): string {
    return md5(txt)
  }
}
