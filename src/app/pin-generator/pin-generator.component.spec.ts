import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinGeneratorComponent } from './pin-generator.component';

describe('PinGeneratorComponent', () => {
  let component: PinGeneratorComponent;
  let fixture: ComponentFixture<PinGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
