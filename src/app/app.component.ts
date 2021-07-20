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
  isExpanded: boolean = false;
  @ViewChild('mainContainer') mainContainer: ElementRef | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  getExpanded = (isExpanded: boolean) => {
    this.isExpanded = isExpanded;
  }

  ngAfterViewInit(): void {
    if (this.mainContainer) {
      Scrollbar.init(this.mainContainer.nativeElement, {
        plugins: {
          overscroll: true,
          continuousScrolling: true,
          renderByPixels: true,
          damping: 0.1,
        }
      });
    } else {
      alert("doenst work")
    }
  }
}
