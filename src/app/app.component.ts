import { Component } from '@angular/core';
import { User } from './user';
import { SignUpService } from "./sign-up.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsYT';
  userModel = new User('', '', '', '', '');
  submitted = false;
  errorMsg= '';

  constructor(private _signUpService: SignUpService) {

  }

  onSubmit() {
    this.submitted = true;
    this._signUpService.signUp(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => this.errorMsg = error.statusText      
      )
  }

}
