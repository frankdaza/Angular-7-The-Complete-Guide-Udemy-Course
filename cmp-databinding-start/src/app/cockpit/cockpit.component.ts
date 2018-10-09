import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output()
  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput) {
    console.log(nameInput.value);

   this.serverCreated.emit({
     serverName: this.newServerContent,
     serverContent: this.newServerContent
   });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerContent,
      serverContent: this.newServerContent
    });
  }

}
 