import { Component, Input } from '@angular/core';
import { PasswordGeneratorService } from './password-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator - Angular';

  constructor() {}
}
