import { Component, OnInit } from '@angular/core';
import { RestApisService } from 'src/app/services/rest-apis.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public restApi:RestApisService) { }

  yearFilters = this.restApi.yearFilters;
  launchLandFilters = this.restApi.launchLandFilters;
  spaceXData:any = [];

  selectedYear = "";
  selectedLaunch = "";
  selectedLanding = "";

  ngOnInit(): void {
    this.getAllData(this.restApi.GET_ALL_DATA);
  }

  getAllData(url){
    this.restApi.getCall(url).subscribe(response => {
      this.spaceXData = response;
    },
    error => {
      this.spaceXData = [];
      window.alert("Sorry! Something is wrong with our servers right now!");
    });
  }

  filterBy(source,value){
    let url = this.restApi.GET_ALL_DATA;
    if(source == 'year'){
      if(this.selectedYear == value){
        this.selectedYear = "";
      }
      else{
        this.selectedYear = value;
      }
    }
    else if(source == 'launch'){
      if(this.selectedLaunch == value){
        this.selectedLaunch = "";
      }
      else{
        this.selectedLaunch = value;
      }
    }
    else{
      if(this.selectedLanding == value){
        this.selectedLanding = "";
      }
      else{
        this.selectedLanding = value;
      }
    }
    if(this.selectedYear != ""){
      url += "&launch_year=" + this.selectedYear;
    }
    if(this.selectedLaunch != ""){
      url += "&launch_success=" + this.selectedLaunch.toLowerCase();
    }
    if(this.selectedLanding != ""){
      url += "&land_success=" + this.selectedLanding.toLowerCase();
    }
    this.getAllData(url);
  }


}
