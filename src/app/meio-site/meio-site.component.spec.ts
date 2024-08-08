import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeioSiteComponent } from './meio-site.component';

describe('MeioSiteComponent', () => {
  let component: MeioSiteComponent;
  let fixture: ComponentFixture<MeioSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeioSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeioSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
