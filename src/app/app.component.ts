import {Component} from '@angular/core';
import {Server} from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers: Server[] = [
    new Server(true, 'apollo', 'cosmic!')
  ];

  onServerCreated(server: { name: string; content: string }) {
    this.servers.push(new Server(true, server.name, server.content));
  }

  onBlueprintCreated(blueprint: { name: string; content: string }) {
    this.servers.push(new Server(false, blueprint.name, blueprint.content));
  }

  onReset() {
    this.servers = [];
  }

  onChangeFirst() {
    this.servers[0].name = 'Changed';
  }
}
