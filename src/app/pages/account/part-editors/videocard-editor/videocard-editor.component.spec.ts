import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardEditorComponent } from './videocard-editor.component';

describe('VideocardEditorComponent', () => {
  let component: VideocardEditorComponent;
  let fixture: ComponentFixture<VideocardEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideocardEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideocardEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
