import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialEventCleaningComponent } from './special-event-cleaning.component';

describe('SpecialEventCleaningComponent', () => {
  let component: SpecialEventCleaningComponent;
  let fixture: ComponentFixture<SpecialEventCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialEventCleaningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialEventCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
