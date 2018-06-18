import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{ name: string; content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string; content: string }>();

  newServerName = '';
  newServerContent = '';

  onServerAdded() {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onBlueprintAdded() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
