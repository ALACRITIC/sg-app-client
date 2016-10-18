import {Component} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import { AppState } from '../../app.service';

import { Title } from "../shared/title/title.service";
import { NewsCarousel } from  "./carousel.component";
import {HomeFooter} from "../shared/footer/footer.component";
import {FrontNews} from "./news.component";
import {PostsService} from "../../shared/services/posts.service";



@Component({

  selector: 'home',


  providers: [
    Title,
    PostsService
  ],



  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.pug'
})
export class Home {
  // Set our default values
  date: Date = new Date();
  localState = { value: '' };
  // TypeScript public modifiers
  constructor( public title: Title) {

  }





}
