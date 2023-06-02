import { Component,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-calendar',
  templateUrl: './date-calendar.component.html',
  styleUrls: ['./date-calendar.component.scss']
})
export class DateCalendarComponent{
  
 

  startDate = new Date();
  selectedDate?: Date;
  selected:boolean=false;
  selected_h: any;
  onDateSelected(date: Date) {
    this.selectedDate = date;
   if(this.dateFilter(date)){
    this.selected=true
    
   }else{
    
    this.selected=false
   }
    console.log("mmmmmmmmmmmmmmmmmm",this.selectedDate,this.selected);
  }

  disabledDates: String[] = [
    new Date('2023-04-29').toDateString(),
    new Date('2023-04-28').toDateString(),
    new Date('2023-04-21').toDateString(),
    new Date('2023-04-22').toDateString(),
    new Date('2023-04-23').toDateString(),
    new Date('2023-05-29').toDateString(),

  ];
  
  dateFilter = (date: any): boolean => {
    const day = date.getDay();
    
    
    return !this.disabledDates.includes(date.toDateString());
  };
  heures =[
    {
      h:"8:30"
    },
    {
      h:"9:30"
    },
    {
      h:"10:30"
    },
    {
      h:"11:30"
    },
    {
      h:"12:30"
    },
    {
      h:"13:30"
    },
    {
      h:"14:30"
    },
    {
      h:"15:30"
    },
    {
      h:"16:30"
    },
    {
      h:"17:30"
    },
    {
      h:"18:30"
    },
  ]
  
 
  selectedHeure(heure: any) {
    this.selected_h = heure;
  }
  
 
}
