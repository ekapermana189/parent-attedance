import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  term;

  // modes =['date','date-time','month','month-year','time','time-date','year'];
  // selectedMode = 'date';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'
  dateValues = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'
  formattedString = '';
  formattedStrings = '';
  @ViewChild(IonDatetime) datetime:IonDatetime;


  constructor() { 
    this.setToday();
    this.setTodays();
  }

  setToday(){
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'),' MMM d, yyyy');
  }

  setTodays(){
    this.formattedStrings = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'),' MMM d, yyyy');
  }

  ngOnInit() {
  }
  
 
  dateChanged(value){
    // console.log(value);
    this.dateValue = value;
    this.formattedString = format(parseISO(value), ' MMM d, yyyy' );
    this.showPicker = false;
  }

  dateChanges(value){
    // console.log(value);
    this.dateValues = value;
    this.formattedStrings = format(parseISO(value), ' MMM d, yyyy' );
    this.showPicker = false;
  }

  close(){
    this.datetime.cancel(true);
  }

  select(){
    this.datetime.confirm(true);
  }

  yes(){
    this.datetime.confirm(true);
  }
}


// setToday(){
//   this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'),'HH:mm, MMM d, yyyy');
// }