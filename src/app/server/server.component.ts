import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  s_id=10;
  s_satus="offline"
serverID='';
serverStatus='';
islogin=false;
updatestatus='';
islog=false;
  constructor() { 
    this.s_satus=Math.random() > 0.5 ? 'online' : 'offline';
  }
  ngOnInit(): void {
  }
 getServerStatus(){
   return this.s_satus;
 }
 getColor(){
  return this.s_satus === 'online'? 'green':'red';
 }
 opendiv(){
  this.islogin=true;
}
opensecond(){
this.islog=true;
}
closesecond(){
  this.islog=false;
}
closediv(){
  this.islogin=false;
}
onUpdate(){
  this.updatestatus= 'Username is   ' +  this.serverID + ' and password is ' + this.serverStatus;
}
}
