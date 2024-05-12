import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersupplyEditorComponent } from './powersupply-editor.component';

describe('PowersupplyEditorComponent', () => {
  let component: PowersupplyEditorComponent;
  let fixture: ComponentFixture<PowersupplyEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowersupplyEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowersupplyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
