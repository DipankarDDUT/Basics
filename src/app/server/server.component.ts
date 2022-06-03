import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: Number = 10;

  serverStatus: string = 'offline';

  getServerStatus = () => {
    return this.serverStatus;
  };

  getColor(): String {
    return this.serverStatus == 'online' ? 'lightgreen' : 'orange';
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {}
}
