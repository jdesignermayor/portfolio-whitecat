import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('isExpandedInput') menuExpanded: boolean = false;
  @Output('isExpandedOutput') isExpandedEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  expandMenu = () => {
    this.menuExpanded = !this.menuExpanded;
    this.isExpandedEvent.emit(this.menuExpanded);
  }
}
