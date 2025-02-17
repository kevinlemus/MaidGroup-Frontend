import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionCleaningServiceComponent } from './construction-cleaning-service.component';

describe('ConstructionCleaningServiceComponent', () => {
  let component: ConstructionCleaningServiceComponent;
  let fixture: ComponentFixture<ConstructionCleaningServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionCleaningServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionCleaningServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
