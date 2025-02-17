import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimeCleaningServiceComponent } from './one-time-cleaning-service.component';

describe('OneTimeCleaningServiceComponent', () => {
  let component: OneTimeCleaningServiceComponent;
  let fixture: ComponentFixture<OneTimeCleaningServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneTimeCleaningServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneTimeCleaningServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
