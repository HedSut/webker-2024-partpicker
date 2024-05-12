import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryEditorComponent } from './memory-editor.component';

describe('MemoryEditorComponent', () => {
  let component: MemoryEditorComponent;
  let fixture: ComponentFixture<MemoryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoryEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
