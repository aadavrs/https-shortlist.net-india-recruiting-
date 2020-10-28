import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageContent;
  pageContentUrl="assets/data/home.json";
  constructor(private config : ConfigService) { }

  ngOnInit(): void {
    this.getPageContent();
    $('.carousel').carousel({
      interval: 2000
    })
  }
  getPageContent(){
    this.config.getPageData(this.pageContentUrl).subscribe((data:any) => {
      this.pageContent = data;
      console.log("data: ", data);
    },
    error =>{
      console.log("Error: ", error);      
    });
  }
}
