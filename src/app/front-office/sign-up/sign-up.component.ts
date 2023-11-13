import {Component, ViewChild} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {ClientService} from "../../Services/client.service";
import {DeveloperService} from "../../Services/developer.service";
import {User} from "../../Entities/User";
import {NgForm} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [MessageService]
})
export class SignUpComponent {
  @ViewChild('signUpForm') signUpForm!: NgForm;
  toggleProperty = false;
  clientSignUp = false;
  emailExist = false;

  constructor(private userService: UserService,
              private clientService: ClientService,
              private developerService: DeveloperService,
              private messageService: MessageService) {
  }

  toggle(clientSignUp: boolean) {
    this.signUpForm.reset()
    this.toggleProperty = !this.toggleProperty;
    this.clientSignUp = clientSignUp;
  }

  verifyEmail(email: string) {
    if (email.length)
      this.userService.verifyAddEmail(email).subscribe({
        next: response => this.emailExist = response,
        error: err => console.log(err)
      })
  }


  signUp(user: User) {
    if (this.clientSignUp)
      this.clientService.signUp(user).subscribe({
        next: response => {
          this.signUpForm.reset()
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Account created successfully'})
        },
        error: err => console.log(err)
      })
    else
      this.developerService.signUp(user).subscribe({
        next: response => {
          this.signUpForm.reset()
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Account created successfully'})

        },
        error: err => console.log(err)
      })
  }
}
