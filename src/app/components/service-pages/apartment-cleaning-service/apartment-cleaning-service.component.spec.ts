import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentCleaningServiceComponent } from './apartment-cleaning-service.component';

describe('ApartmentCleaningServiceComponent', () => {
  let component: ApartmentCleaningServiceComponent;
  let fixture: ComponentFixture<ApartmentCleaningServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentCleaningServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentCleaningServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
