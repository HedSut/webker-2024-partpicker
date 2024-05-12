import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardCardComponent } from './motherboard-card.component';

describe('MotherboardCardComponent', () => {
  let component: MotherboardCardComponent;
  let fixture: ComponentFixture<MotherboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotherboardCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotherboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
