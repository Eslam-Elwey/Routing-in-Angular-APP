import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authService: AuthService){}
  allUsers :[]|any=[] ;
  ngOnInit(): void {
    let retVal = localStorage.getItem('allUsers') ;
    if(retVal!==null)
    {
      this.allUsers = JSON.parse(retVal) ;
      console.log(this.allUsers);
    }
  }

  email:string="" ;
  password:string="" ;
  emailStatus:boolean = false ;
  passwordStatus:boolean = false ;
  clicked:boolean=false ;

  checkEmailExisted() :number
  {
    let index = this.allUsers.findIndex((user:{email:string,name:string,password:string})=>user.email===this.email);
    return index ;
  }

  checkCorrectPassword(userindex:number)
  {
    if(this.password===this.allUsers[userindex].password)
    {
      return true ;
    }
    return false ;
  }

  loginfun()
  {
    this.clicked = true ;
    let emaiIndex = this.checkEmailExisted() ;
    if(emaiIndex===-1)
    {
      this.emailStatus = false ;
      return ;
    }
    else
    {
      this.emailStatus =true ;
      let passwordstate =  this.checkCorrectPassword(emaiIndex);
      if(passwordstate)
      {
        this.passwordStatus = true ;
        this.clicked=false ;
        this.authService.setAuthState('allow');
        this.email = "" ;
        this.password = "" ;
        this.router.navigate(['/home']);
      }
      else
      {
        this.clicked = true ;
        this.passwordStatus = false ;
      }
    }
  }

  typingFun()
  {
    this.clicked = false ;
  }

  goToRegister()
  {
    this.router.navigate(['/register']);
  }
}
