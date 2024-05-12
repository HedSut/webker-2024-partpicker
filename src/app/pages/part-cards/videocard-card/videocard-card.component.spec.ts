import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardCardComponent } from './videocard-card.component';

describe('VideocardCardComponent', () => {
  let component: VideocardCardComponent;
  let fixture: ComponentFixture<VideocardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideocardCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideocardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
