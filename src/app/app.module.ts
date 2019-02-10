import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { PinGeneratorComponent } from './pin-generator/pin-generator.component';
import { Md5EcryptComponent } from './md5-ecrypt/md5-ecrypt.component';
import { Sha1EncryptComponent } from './sha1-encrypt/sha1-encrypt.component';
import { Sha256EncryptComponent } from './sha256-encrypt/sha256-encrypt.component';
import { Sha512EncryptComponent } from './sha512-encrypt/sha512-encrypt.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent,
    PinGeneratorComponent,
    Md5EcryptComponent,
    Sha1EncryptComponent,
    Sha256EncryptComponent,
    Sha512EncryptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
