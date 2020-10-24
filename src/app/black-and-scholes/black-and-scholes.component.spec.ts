import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackAndScholesComponent } from './black-and-scholes.component';

describe('BlackAndScholesComponent', () => {
  let component: BlackAndScholesComponent;
  let fixture: ComponentFixture<BlackAndScholesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackAndScholesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackAndScholesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
