import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../Entities/User";
import {AuthenticationService} from "../../Services/authentication.service";
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
    '../../../assets/vendor/fonts/boxicons.css']
})
export class HeaderComponent implements OnInit{
  @Input() isMenuOpen: boolean = true;
  @Output() toggleMenu = new EventEmitter<boolean>();
  user = new User();

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router) {
  }
  openMenu() {
    this.toggleMenu.emit(true);
  }

  ngOnInit(): void {
    this.userService.getUserById(parseInt(this.authenticationService.getUserId())).subscribe({
      next: response => {
        this.user = response;
      },
      error: error => console.log(error)
    })
  }

  logOut() {
    this.authenticationService.clear();
    this.router.navigate(['/']);
  }
}
