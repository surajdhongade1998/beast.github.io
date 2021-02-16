import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  // serverCreationStatus = 'No server was created!';
  serverCreationStatus:any=[];
  serverName ='';
  servercreated=false;
  username = "static username";
  updateusername = 'username is not mentioned';
  Usercreated=false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.servercreated=true;
    this.serverCreationStatus.push(this.serverName);
    console.log(this.serverCreationStatus)
    // this.serverCreationStatus = 'Server was created! Name is ' + this.serverName; 
  }
  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  OnUpdateUsername() {
    this.Usercreated=true;
    this.updateusername = ' updated username is ' + this.username;
  }
}
