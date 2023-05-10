import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    // We need to add the token before the test
    localStorage.setItem('token', 'testing')

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //right now this is an integration test because it's calling the authService
  it('should remove the token from localStorage', () =>{
    expect(localStorage.getItem('token')).toBeTruthy()
    component.logout()
    expect(localStorage.getItem('token')).toBeNull()
  })
});
