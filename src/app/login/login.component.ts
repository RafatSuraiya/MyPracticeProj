import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { fbind } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//MyForm:FormGroup;
email: string;
password: string;
  constructor(//private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
   // this.createForm();
    this.navigate();
  }
/*createForm(){
  this.MyForm= this.fb.group({
    email:'',
    password:'',
  })
}*/
navigate(){
  if(this.router.url === '/home'){
    this.router.navigate(['./login'],{relativeTo:this.route})
  }
}

  login() {
    if(this.email == 'dhiraj@gmail.com' && this.password == 'password') {
    this.router.navigate(['user']);
    }else {
    alert("Invalid credentials.")
    }
    }

}
