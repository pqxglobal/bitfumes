import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
  };

  isLoading: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  submit() {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        alert('login success');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials does not match our record.');
      })
      .finally(() => (this.isLoading = false))
  }
}
