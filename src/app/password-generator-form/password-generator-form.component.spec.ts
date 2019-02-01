import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGeneratorFormComponent } from './password-generator-form.component';

describe('PasswordGeneratorFormComponent', () => {
  let component: PasswordGeneratorFormComponent;
  let fixture: ComponentFixture<PasswordGeneratorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordGeneratorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordGeneratorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
