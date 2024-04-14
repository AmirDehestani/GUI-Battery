import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomyStatusComponent } from './autonomy-status.component';

describe('AutonomyStatusComponent', () => {
  let component: AutonomyStatusComponent;
  let fixture: ComponentFixture<AutonomyStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutonomyStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutonomyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
