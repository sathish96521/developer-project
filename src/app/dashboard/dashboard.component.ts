import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users = [
    { id: 1, name: 'Sathish', email: 'sathish@gmail.com' },
    { id: 2, name: 'kumar', email: 'kumar@gmail.com' },
    { id: 3, name: 'ramaiah', email: 'ram@gmail.com' }
  ]
  constructor(private _route: Router) { }

  ngOnInit(): void {
  }
  editUser(user: any) {
    console.log('edit user', user);
  }

  viewUser(user: any) {
    this._route.navigate(['/user', user.id], { state: {user: user} })
  }

  deleteUser(user: any) {
    const index = this.users.indexOf(user);
    if(index > -1) {
      this.users.splice(index, 1);
    }
  }
  
  addUser() {
    console.log('add details');
  }
}
