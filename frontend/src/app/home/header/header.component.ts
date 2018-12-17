import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  statusLogin = false;


  constructor(private modalService: BsModalService,
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.statusLogin = true;
    }
  }

  openLogin() {
    this.modalService.show(LoginComponent);
  }

  openRegister() {
    this.modalService.show(RegisterComponent);
  }

  logout() {
    this.router.navigate(['/']).then(() => {
      this.authService.logout();
      this.statusLogin = false;
    })
  }
}
