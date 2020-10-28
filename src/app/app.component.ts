import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core'; 
import { ConfigService } from './config/config.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  footerMenuLst;footerMenuLst1;footerMenuLst2;footerMenuLst3;
  constructor(private config : ConfigService){    
  }
  ngOnInit(){
    this.getfootermenu('footermenu.json',0);
    this.getfootermenu('footermenu1.json',1);
    this.getfootermenu('footermenu2.json',2);
    this.getfootermenu('footermenu3.json',3);    
  }
  getfootermenu(file:string, id:number){
    this.config.getUrlConfig(file).subscribe((data:any) => {       
      if(id == 1){
        this.footerMenuLst1 = data;
      }
      else if(id == 2){
        this.footerMenuLst2 = data;
      }
      else if(id == 3){
        this.footerMenuLst3 = data;
      }
      else{
        this.footerMenuLst = data;
      }     
    },
    error =>{
      console.log("Error: ", error);      
    });
  } 
}
