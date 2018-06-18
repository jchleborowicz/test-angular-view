import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{ name: string; content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string; content: string }>();
  @Output() reset = new EventEmitter();

  onServerAdded(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: contentInput.value
    });
  }

  onBlueprintAdded(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: contentInput.value
    });
  }

  onReset() {
    this.reset.emit();
  }

}
