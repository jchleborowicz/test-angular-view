import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{ name: string; content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string; content: string }>();
  @Output() reset = new EventEmitter();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onServerAdded(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onBlueprintAdded(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onReset() {
    this.reset.emit();
  }

}
