import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulfooterComponent } from './defaulfooter.component';

describe('DefaulfooterComponent', () => {
  let component: DefaulfooterComponent;
  let fixture: ComponentFixture<DefaulfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaulfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaulfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
