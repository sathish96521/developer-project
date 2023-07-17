import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDistCalcComponent } from './salary-dist-calc.component';

describe('SalaryDistCalcComponent', () => {
  let component: SalaryDistCalcComponent;
  let fixture: ComponentFixture<SalaryDistCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryDistCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryDistCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
