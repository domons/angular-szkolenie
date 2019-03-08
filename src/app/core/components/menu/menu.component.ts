import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  isLoggedUser = false;
  loggedUserName = '';

  constructor(
    private router: Router,
    private auth: AuthService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.verifyLoggedUser();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(this.verifyLoggedUser.bind(this));
  }

  async verifyLoggedUser() {
    try {
      await this.auth.isLoggedUser();
      this.isLoggedUser = true;
      this.loggedUserName = await this.auth.getLoggedUser();
    } catch (err) {
      this.isLoggedUser = false;
    }

    this.changeDetector.detectChanges();
  }
}
