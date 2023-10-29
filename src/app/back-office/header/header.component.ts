import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
    '../../../assets/vendor/fonts/boxicons.css']
})
export class HeaderComponent {
  @Input() isMenuOpen: boolean = true;
  @Output() toggleMenu = new EventEmitter<boolean>();

  openMenu() {
    this.toggleMenu.emit(true);
  }
}
