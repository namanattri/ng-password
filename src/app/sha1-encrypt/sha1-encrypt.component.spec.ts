import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sha1EncryptComponent } from './sha1-encrypt.component';

describe('Sha1EncryptComponent', () => {
  let component: Sha1EncryptComponent;
  let fixture: ComponentFixture<Sha1EncryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sha1EncryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sha1EncryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
