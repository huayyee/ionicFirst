import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  name: any;
  nickname: any;
  age: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.nickname = this.router.getCurrentNavigation().extras.state.nickname;
        this.age = this.router.getCurrentNavigation().extras.state.age;

        console.log("Name ", this.name);
        console.log("Nickname ", this.nickname);
        console.log("Age ", this.age);
      }
    });
   }

  ngOnInit() {
  }

}
