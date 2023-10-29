import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css',
    '../../../assets/vendor/fonts/boxicons.css']
})
export class SideNavComponent {
  @Input() isMenuOpen: boolean = true;
  @Output() toggleMenu = new EventEmitter<boolean>();

  closeMenu() {
    this.toggleMenu.emit(false);
  }
}
