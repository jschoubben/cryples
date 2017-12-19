import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'ngx-configure',
  styleUrls: ['./configure.component.scss'],
  templateUrl: './configure.component.html',
})
export class ConfigureComponent {
  apikey: string;
  apisecret: string;

  constructor(private router: Router){
    this.apikey = localStorage.getItem('APIKEY');
    this.apisecret = localStorage.getItem('APISECRET');
  }

  public saveKey = function(value) {
      localStorage.setItem('APIKEY', value || this.apikey);   
  }

  public saveSecret = function(value){
    localStorage.setItem('APISECRET', value || this.apisecret);
  }
}
