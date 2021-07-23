import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


interface Category {
  id: number;
  title: string;
  active: boolean;
}

interface Work {
  id: number;
  type: number;
  title: string;
  description: string;
  imagePath: string;
  theme: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  worklist: any = [];
  worklistFilter: any = [];

  categories: any = [];

  options: AnimationOptions = {
    path: '../assets/lottie/ChargingCat.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  ngOnInit(): void {
    this.worklist = [{
      id: 0,
      type: 3,
      title: "Coru",
      description: "UI design, Mobile Development, Animation.",
      imagePath: "https://design4users.com/wp-content/uploads/2020/01/graphic-design-trends.jpg",
      theme: "light",
    }, {
      id: 1,
      type: 0,
      title: "Project name 1",
      description: "UI design, Mobile Development, Animation.",
      imagePath: "",
      theme: "light",
    }, {
      id: 2,
      type: 1,
      title: "Project name 2",
      description: "UI design, Mobile Development, Animation.",
      imagePath: "",
      theme: "light",
    }, {
      id: 3,
      type: 0,
      title: "Project name 3",
      description: "UI design, Mobile Development, Animation.",
      imagePath: "",
      theme: "light",
    }];

    this.categories = [
      {
        id: 0,
        title: "All",
        active: true,
      },
      {
        id: 1,
        title: "Development",
        active: false,
      },
      {
        id: 2,
        title: "Design UI/UX",
        active: false,
      },
      {
        id: 3,
        title: "Mobile development",
        active: false,
      },
      {
        id: 4,
        title: "Motion",
        active: false,
      }];

    this.worklistFilter = this.worklist;
  }

  activeChip = (category: Category) => {
    this.categories.forEach((cat: Category) => {
      if (cat.id !== category.id) {
        cat.active = false;
      } else {
        cat.active = true;
      }
    })
    this.filterWorkList(category);
  }

  filterWorkList = (category: Category) => {
    if (category.id == 0) {
      this.worklistFilter = this.worklist;
    } else {
      this.worklistFilter = this.worklist;
      this.worklistFilter = this.worklistFilter.filter((work: Work) => {
        return work.type === category.id;
      });
    }
  }
}
