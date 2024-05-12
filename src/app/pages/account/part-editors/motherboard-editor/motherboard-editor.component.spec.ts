import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardEditorComponent } from './motherboard-editor.component';

describe('MotherboardEditorComponent', () => {
  let component: MotherboardEditorComponent;
  let fixture: ComponentFixture<MotherboardEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotherboardEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotherboardEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
