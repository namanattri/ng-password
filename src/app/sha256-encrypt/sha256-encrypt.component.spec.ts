import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sha256EncryptComponent } from './sha256-encrypt.component';

describe('Sha256EncryptComponent', () => {
  let component: Sha256EncryptComponent;
  let fixture: ComponentFixture<Sha256EncryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sha256EncryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sha256EncryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
