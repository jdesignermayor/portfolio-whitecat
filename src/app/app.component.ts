import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, ViewChild } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-whitecat';
  @ViewChild('mainContainer') mainContainer: ElementRef | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  ngAfterViewInit(): void {

    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    if (this.mainContainer) {
      Scrollbar.init(this.mainContainer.nativeElement, {
        plugins: {
          overscroll: true
        }
      });
    } else {
      alert("doenst work")
    }
  }
}
