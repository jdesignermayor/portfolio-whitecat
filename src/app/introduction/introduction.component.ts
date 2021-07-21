import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  @ViewChild('videoAnimation') videoElement: ElementRef | undefined;
  videoPath: string = "";
  classStyle: string = "";

  options: AnimationOptions = {
    path: '../../assets/illustrations/whiteCat.mp4',
  };

  constructor() { }

  ngOnInit(): void {
    this.videoPath = "../../assets/illustrations/whiteCat.mp4";
    setTimeout(() => {
      this.classStyle = "animate__animated animate__fadeIn";
      this.videoElement?.nativeElement.play();
    }, 1000)
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }




}
