import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  worklist: any = [];

  constructor() {

  }

  ngOnInit(): void {
    this.worklist = [{
      id: 0,
      title: "Coru",
      description: "UI design, Mobile Development, Animation.",
      imagePath: ""
    }, {
      id: 1,
      title: "Project name 1",
      description: "UI design, Mobile Development, Animation.",
      imagePath: ""
    }, {
      id: 2,
      title: "Project name 2",
      description: "UI design, Mobile Development, Animation.",
      imagePath: ""
    }, {
      id: 3,
      title: "Project name 3",
      description: "UI design, Mobile Development, Animation.",
      imagePath: ""
    }];
  }

}
