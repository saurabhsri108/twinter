import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMobileNavigationVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMobileNavigation() {
    this.isMobileNavigationVisible = !this.isMobileNavigationVisible;
  }
}
