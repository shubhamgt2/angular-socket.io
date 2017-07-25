import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  socket;
  numberOfOnlineUsers: number;

  constructor() {
    this.socket = io();
  }

  public ngOnInit(): void {
    this.socket.on('numberOfOnlineUsers', (numberOfOnlineUsers) => {
      this.numberOfOnlineUsers = numberOfOnlineUsers;
    });
  }
}
