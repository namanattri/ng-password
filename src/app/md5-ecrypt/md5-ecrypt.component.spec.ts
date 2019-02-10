import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Md5EcryptComponent } from './md5-ecrypt.component';

describe('Md5EcryptComponent', () => {
  let component: Md5EcryptComponent;
  let fixture: ComponentFixture<Md5EcryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Md5EcryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Md5EcryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
