import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tipoDoInput:string 
  
  VerSenha(){
    if(this.tipoDoInput == 'password'){
      this.tipoDoInput = 'text';
    }
  }

  EsconderSenha(){
    if(this.tipoDoInput == 'text'){
      this.tipoDoInput = 'password';
    }
  }

  ngOnInit(): void {
    this.tipoDoInput = 'password';
  }
}
