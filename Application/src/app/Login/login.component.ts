import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from "rxjs/Rx";
import { Dashboardcomponent } from '../Dashboard/Dashboard.component';


@Component({
  selector: 'login',
  styleUrls: ['login.component.css'],
  templateUrl: './login.component.html'

})

export class loginComponent implements AfterViewInit{
  public input: any;
  public message: any;
  constructor(private _httpService: Http, private router: Router, private elementRef: ElementRef) {
    this.input = {
      "username": "",
      "password": ""
    };

  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightgrey';
  }
  // calling a service
  public get() {

    this._httpService.get('api/Values?username=' + this.input.username + '&' + 'password=' + this.input.password)
      .subscribe(result => {
        let data = result.text();
        var key = btoa(this.input.username);
        document.cookie = key;

        if (data === "login success") {


          this.router.navigateByUrl('/Dashboard');
        }
        else {

          this.message = data;
        }




      }, error => console.error(error));
  }
}

