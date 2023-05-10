import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListComponent } from './invoice-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InvoiceListComponent', () => {
  let component: InvoiceListComponent;
  let fixture: ComponentFixture<InvoiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of invoices now', () =>{
    expect(component.invoices.length).toEqual(0) //expect default to be 0
    component.findInvoices();//after function...
    fixture.whenStable().then(() =>{
    expect(component.invoices.length).toBeGreaterThan(0)//expect length to be greater than 0
  })
  })

});
