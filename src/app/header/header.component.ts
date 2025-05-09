import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openMenu: boolean = false;

  toggle() {
    this.openMenu = !this.openMenu;
    console.log(this.openMenu);
  }
}
