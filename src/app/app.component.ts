import {Component} from '@angular/core';
import {Server} from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Server[] = [
    new Server(true, 'Test server', 'Just a test!'),
    new Server(false, 'apollo 440', 'Something really else...')
  ];

  onServerCreated(server: Server) {
    this.serverElements.push(server);
  }
}
