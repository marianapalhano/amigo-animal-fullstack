import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopterDetailsComponent } from './adopter-details.component';

describe('AdopterDetailsComponent', () => {
  let component: AdopterDetailsComponent;
  let fixture: ComponentFixture<AdopterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdopterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
