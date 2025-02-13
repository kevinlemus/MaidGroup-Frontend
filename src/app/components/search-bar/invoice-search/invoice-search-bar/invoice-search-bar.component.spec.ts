import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSearchBarComponent } from './invoice-search-bar.component';

describe('InvoiceSearchBarComponent', () => {
  let component: InvoiceSearchBarComponent;
  let fixture: ComponentFixture<InvoiceSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
