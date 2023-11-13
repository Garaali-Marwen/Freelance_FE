import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../Services/authentication.service";
import {UserService} from "../../Services/user.service";
import {User} from "../../Entities/User";
import {NavigationEnd, Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  userConnected = false;
  user = new User();

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateHeader();
      }
    });
  }

  ngOnInit(): void {
    this.updateHeader();
  }

  private updateHeader() {
    if (this.authenticationService.isLoggedIn()) {
      this.userConnected = true;
      this.userService.getUserById(parseInt(this.authenticationService.getUserId())).subscribe({
        next: response => {
          this.user = response;
        },
        error: error => console.log(error)
      });
    } else {
      this.userConnected = false;
      this.user = new User();
    }
  }

  logOut() {
    this.authenticationService.clear();
    this.updateHeader();
    this.router.navigate(['/']);
  }
}
