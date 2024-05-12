import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersupplyCardComponent } from './powersupply-card.component';

describe('PowersupplyCardComponent', () => {
  let component: PowersupplyCardComponent;
  let fixture: ComponentFixture<PowersupplyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowersupplyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowersupplyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
