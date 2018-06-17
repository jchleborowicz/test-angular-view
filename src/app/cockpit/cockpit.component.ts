import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Server} from '../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<Server>();

  newServerName = '';
  newServerContent = '';

  constructor() {
  }

  ngOnInit() {
  }

  onServerAdded() {
    this.emitNewItem(true);
  }

  onBlueprintAdded() {
    this.emitNewItem(false);
  }

  private emitNewItem(isServer: boolean) {
    this.serverCreated.emit(new Server(isServer, this.newServerName, this.newServerContent));
  }

}
