import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationData: any;

  saveRegistrationData(data: any) {
    console.log(data);
    
    this.registrationData = data;
  }

  getRegistrationData() {
    return this.registrationData;
  }
}
