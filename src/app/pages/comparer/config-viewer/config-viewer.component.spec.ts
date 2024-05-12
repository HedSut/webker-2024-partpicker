import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigViewerComponent } from './config-viewer.component';

describe('ConfigViewerComponent', () => {
  let component: ConfigViewerComponent;
  let fixture: ComponentFixture<ConfigViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
