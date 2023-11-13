import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {User} from "../../Entities/User";
import {AuthenticationService} from "../../Services/authentication.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
  providers: [MessageService]
})
export class AccountSettingsComponent implements OnInit {

  user: User = new User()
  userEmail: string = ''
  emailExist = false
  public image: any = {
    file: new File([], ""),
    url: ""
  }

  constructor(private userService: UserService,
              private authenticationService: AuthenticationService,
              private messageService: MessageService) {

  }

  ngOnInit()
    :
    void {
    this.userService.getUserById(parseInt(this.authenticationService.getUserId())).subscribe({
      next: response => {
        this.user = response
        this.userEmail = response.email
      },
      error: error => console.log(error)
    })
  }

  verifyEmail(newEmail
                :
                string
  ) {
    if (newEmail.length)
      this.userService.verifyEditEmail(newEmail, this.userEmail).subscribe({
        next: response => this.emailExist = response,
        error: err => console.log(err)
      })
  }

  onFileSelected(event
                   :
                   any
  ) {
    if (event.target.files) {
      const file = event.target.files[0];
      this.image = {
        file: file,
        url: null
      };
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image.url = reader.result as string;
      };
    }
  }

  prepareFormData(user
                    :
                    User, image
                    :
                    any
  ):
    FormData {
    const formData = new FormData();
    formData.append(
      'user',
      new Blob([JSON.stringify(user)], {type: 'application/json'})
    );
    formData.append(
      'image',
      image.file,
    );
    return formData;
  }

  updateUser() {
    const userFormData = this.prepareFormData(this.user, this.image)
    this.userService.updateUser(userFormData).subscribe({
      next: response => this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Account updated successfully'
      }),
      error: error => console.log(error)
    })
  }
}
