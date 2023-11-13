import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../Services/authentication.service";
import {jwtDecode} from "jwt-decode";
import {NgForm} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private messageService: MessageService) {
  }

  public login(loginForm: NgForm) {
    this.authenticationService.login(loginForm.value).subscribe({
        next: response => {
          const decoded = jwtDecode(response.accessToken) as any;
          this.authenticationService.setUserId(decoded.id);
          this.authenticationService.setRoles(decoded.role);
          this.authenticationService.setUserEmail(decoded.sub);
          this.authenticationService.setToken(response.accessToken);
          this.authenticationService.setRefreshToken(response.refreshToken);
          if (decoded.role === 'CLIENT') {
            this.router.navigate(['/']);
          } else if (decoded.role == 'DEVELOPER') {
            this.router.navigate(['/']);
          } else if (decoded.role == 'ADMIN') {
            this.router.navigate(['/backOffice/dashboard']);
          }
        },
        error: () => {
          loginForm.form.setErrors({'invalid': true});
          this.messageService.add({severity: 'warn', summary: 'Warn', detail: 'Please check your login credentials.'})
        }
      }
    );
  }

}
