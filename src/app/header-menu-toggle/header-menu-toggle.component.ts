import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu-toggle',
  templateUrl: './header-menu-toggle.component.html',
  styleUrls: ['./header-menu-toggle.component.scss']
})
export class HeaderMenuToggleComponent implements OnInit {

  options: any = [];
  constructor() { }

  ngOnInit(): void {
    this.options = [{
      id: 0,
      title: 'Work'
    }, {
      id: 0,
      title: 'Services'
    }, {
      id: 0,
      title: 'About us'
    }, {
      id: 0,
      title: 'Blog'
    }
    ]
  }

}
