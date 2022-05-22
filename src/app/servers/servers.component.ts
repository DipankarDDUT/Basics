import { Component, OnInit } from '@angular/core';

//Component decorator convert class to component
@Component({
  selector: 'app-servers',
  //inline template
  // template: `<app-server></app-server>`,
  // mandotory templateUrl or template other two selector and styleUrls not mandatory
  templateUrl: './servers.component.html',
  //styleUrls is array as multiple style file can be added for single component
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
