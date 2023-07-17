import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-dist-calc',
  templateUrl: './salary-dist-calc.component.html',
  styleUrls: ['./salary-dist-calc.component.css']
})
export class SalaryDistCalcComponent implements OnInit {
  salary: number;
  needsPercentage: number;
  wantsPercentage: number;
  needsAmount: number;
  wantsAmount: number;
  savingsAmount: number;

  calculateDistribution() {
    if (this.salary && this.needsPercentage && this.wantsPercentage) {
      // Calculate the amounts based on percentages and salary
      const needsAmount = (this.salary * (this.needsPercentage / 100)).toFixed(2);
      const wantsAmount = (this.salary * (this.wantsPercentage / 100)).toFixed(2);
      const savingsAmount = (this.salary - (+needsAmount) - (+wantsAmount)).toFixed(2);

      // Update the amounts
      this.needsAmount = +needsAmount;
      this.wantsAmount = +wantsAmount;
      this.savingsAmount = +savingsAmount;
    }
  }

  calculateAmount(percentage: number): number {
    if (this.salary) {
      return (this.salary * (percentage / 100));
    }
    return 0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
