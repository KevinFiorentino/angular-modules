import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/shared/services/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.setUser({
      email: 'prueba@platzi.com',
      name: 'Platzi',
      role: 'admin'
    });
  }

}
