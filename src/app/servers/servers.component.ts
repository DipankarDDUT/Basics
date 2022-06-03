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
  allowNewServer = false;
  //initailly component loaded will show serverName as TestServer as ngModel used when changed in templat file it will also change here
  serverName: string = 'TestServer';
  serverCreationStatus = 'no Server was created';
  onCreateServer = () => {
    this.serverCreationStatus = 'Server is created! Name is' + this.serverName;
  };
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}
}
