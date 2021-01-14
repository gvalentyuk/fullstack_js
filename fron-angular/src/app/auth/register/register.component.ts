import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {AuthService} from "../auth.service";

import {ComparePasswords} from "../validators/compare-passwords";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, {validators: [this.comparePasswords.validate]})


  constructor(
    private authService: AuthService,
    private comparePasswords: ComparePasswords,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.registerForm.getRawValue()).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: err => {
        if (!err.status) {
          this.registerForm.setErrors({noConnection: true})
        } else {
          this.registerForm.setErrors({anotherError: true});
        }
      }
    })
  }

}
