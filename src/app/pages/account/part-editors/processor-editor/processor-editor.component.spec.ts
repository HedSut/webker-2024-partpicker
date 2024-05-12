import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorEditorComponent } from './processor-editor.component';

describe('ProcessorEditorComponent', () => {
  let component: ProcessorEditorComponent;
  let fixture: ComponentFixture<ProcessorEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessorEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcessorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
