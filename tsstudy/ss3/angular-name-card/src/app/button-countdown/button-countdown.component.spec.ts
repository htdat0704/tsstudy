import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCountdownComponent } from './button-countdown.component';

describe('ButtonCountdownComponent', () => {
  let component: ButtonCountdownComponent;
  let fixture: ComponentFixture<ButtonCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCountdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
