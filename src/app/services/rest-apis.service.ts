import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApisService {

  constructor(public http: HttpClient) { }

  yearFilters = ["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"];
  launchLandFilters = ["True","False"];
  innerHeight = "";

  // API End points
  readonly GET_ALL_DATA = "https://api.spaceXdata.com/v3/launches?limit=100";

  getCall(apiName){
    return this.http.get(apiName);
  }

}
