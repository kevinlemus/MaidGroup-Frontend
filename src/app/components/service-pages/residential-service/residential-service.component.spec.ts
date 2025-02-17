import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialServiceComponent } from './residential-service.component';

describe('ResidentialServiceComponent', () => {
  let component: ResidentialServiceComponent;
  let fixture: ComponentFixture<ResidentialServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
