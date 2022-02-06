import { Component, OnInit } from '@angular/core';
import Moralis from 'moralis';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMobileNavigationVisible: boolean = false;
  public metaUser: any = undefined;

  constructor() {}

  ngOnInit(): void {
    const { serverUrl, appId } = environment.moralis;
    Moralis.start({ serverUrl, appId });
  }

  public toggleMobileNavigation() {
    this.isMobileNavigationVisible = !this.isMobileNavigationVisible;
  }

  public async metaLogin() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate();
    }
    this.metaUser = user.get('ethAddress');
    this.metaUser =
      this.metaUser.slice(0, 4) + '......' + this.metaUser.slice(-4);
  }

  public async metaLogout() {
    await Moralis.User.logOut();
    this.metaUser = undefined;
  }
}
