import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private authService: AuthService){}

  ngOnInit(): void {
    console.log(this.authService);
    this.authService.authState$.subscribe(state => {
      this.guardToken = state;
    });
  }

  guardToken : string ="" ;

  logOutfun()
  {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
