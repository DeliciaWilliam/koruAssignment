import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  custId: any;
  toastrConfig = { positionClass: "toast-bottom-right", closeButton: true, }
  
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getLoginForm();
  }

  getLoginForm () {
    
    this.loginForm = this.fb.group(
      {
        username: ['', Validators.compose([Validators.required, Validators.min(0), Validators.pattern(/^[a-zA-Z ]*$/)])],

        password: ['',[Validators.compose([Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])]], // qty set with lot size from api

      }
    );

  }



  getFormDetails() {
    // console.log(this.loginForm.value)
    // this.toastr.success('Success','Login Successfully',this.toastrConfig)
    this.toastr.success('Login Successfully', 'Success', {
      timeOut: 3000,
    });
    this.router.navigate(['showData']);
  }

}

export const regExps: { [key: string]: RegExp } = {
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/
};
