import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoHelpComponent } from './howto-help.component';

describe('HowtoHelpComponent', () => {
  let component: HowtoHelpComponent;
  let fixture: ComponentFixture<HowtoHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtoHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
