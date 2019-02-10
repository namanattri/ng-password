import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sha512EncryptComponent } from './sha512-encrypt.component';

describe('Sha512EncryptComponent', () => {
  let component: Sha512EncryptComponent;
  let fixture: ComponentFixture<Sha512EncryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sha512EncryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sha512EncryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
