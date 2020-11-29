import { AfterViewInit, Component, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { RestApisService } from './services/rest-apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'space-x-browser';
  innerHeight: string;

  constructor(public restApi:RestApisService){
    this.innerHeight = window.innerHeight + "px";
    this.restApi.innerHeight = this.innerHeight
  }
  ngAfterViewInit(): void {
      $('#page-wrapper').css({ 'min-height': this.innerHeight });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight + "px";
    this.restApi.innerHeight = this.innerHeight;
    $('.menu-block').css({ 'min-height': this.innerHeight });
    $('.menu-block').css({ 'max-height': this.innerHeight });
    $('.app-body-block').css({ 'min-height': this.innerHeight });
    $('.app-body-block').css({ 'max-height': this.innerHeight });
  }
}
