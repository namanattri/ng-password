import { Injectable } from '@angular/core';
import { PasswordGeneratorService } from './password-generator.service';
import { PinGeneratorFormInterface } from './pin-generator-form-interface';

@Injectable({
  providedIn: 'root'
})
export class PinGeneratorService extends PasswordGeneratorService {

  numbers: string = "0123456789";

  generateFourDigit(formValue: PinGeneratorFormInterface): string {
    return this.shufflerService.shuffle(formValue.allowRepeatingCharacters ? this.randomGeneratorService.getRandom(this.numbers, 4) : this.randomGeneratorService.getRandomUnique(this.numbers, 4));
  }

  generateSixDigit(formValue: PinGeneratorFormInterface): string {
    return this.shufflerService.shuffle(formValue.allowRepeatingCharacters ? this.randomGeneratorService.getRandom(this.numbers, 6) : this.randomGeneratorService.getRandomUnique(this.numbers, 6));
  }
}
