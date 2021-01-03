import { Component, OnInit } from '@angular/core';
import {APIClientService, RootObject, RootObject1} from '../../services/apiclient.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {

  messageForUser: string;
  rootObject: RootObject;
  rootObject1: RootObject1;

  constructor(private apiClientService: APIClientService) {
  }

  ngOnInit(): void {
    this.apiClientService.getAPI().subscribe(value => {
      this.rootObject = value;
    });
    this.apiClientService.getAPI1().subscribe(value => {
        this.rootObject1 = value;
      });
  }

  sayHello(value: string) {
    this.messageForUser = 'Cześć ' + value;
  }
}
