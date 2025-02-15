import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationSearchBarComponent } from './consultation-search-bar.component';

describe('ConsultationSearchBarComponent', () => {
  let component: ConsultationSearchBarComponent;
  let fixture: ComponentFixture<ConsultationSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
