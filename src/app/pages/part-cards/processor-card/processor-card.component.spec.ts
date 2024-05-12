import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorCardComponent } from './processor-card.component';

describe('ProcessorCardComponent', () => {
  let component: ProcessorCardComponent;
  let fixture: ComponentFixture<ProcessorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessorCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcessorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
