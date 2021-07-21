import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header-menu-toggle',
  templateUrl: './header-menu-toggle.component.html',
  styleUrls: ['./header-menu-toggle.component.scss']
})
export class HeaderMenuToggleComponent implements OnInit {

  @Input() isExpanded: boolean = true;
  animateClass: string = "animate__animated animate__fadeIn";
  options: any = [];

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
    ];
  }

}
