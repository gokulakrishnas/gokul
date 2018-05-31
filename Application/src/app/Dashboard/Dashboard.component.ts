import { Component, Input, ElementRef, ViewChild, AfterViewInit, } from '@angular/core';
import * as Highcharts from 'highcharts';
import { chart } from 'highcharts';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators/map';
import { Observable, Subscription } from 'rxjs/Rx';
import { Pipe, PipeTransform } from '@angular/core';
import { Group } from '../Models/Models.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from "@angular/router";
import { logoutdialogcomponent } from '../LogoutDialog/logoutdialog.component';
@Component({
  selector: 'Dashboard',
  templateUrl: 'Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css'],

})

export class Dashboardcomponent implements AfterViewInit  {
  public username: string;
  constructor(private router: Router, public dialog: MatDialog, private elementRef: ElementRef) {
    var x = document.cookie;
    this.username = atob(x.toString());
    this.stateCtrl = new FormControl();
    this.filteredGroups1 = this.stateCtrl.valueChanges
      .pipe(

      map(member => member ? this.filterGroups1(member) : this.Groups.slice())
      );
    this.filteredGroups = this.stateCtrl.valueChanges
      .pipe(

      map(group => group ? this.filterGroups(group) : this.Groups.slice())
      );
  }
  stateCtrl: FormControl;
  filteredGroups: Observable<any[]>;
  filteredGroups1: Observable<any[]>;
  Groups: Group[] = [
    {
      groupname: "AIDWEB",
      member: [
        {
          membername: 'ajay'
        },
        {
          membername: "value2"
        }],

    },
    {
      groupname: "web",
      member: [
        {
          membername: 'arun'
        },
        {
          membername: "value4"
        }]

    }


  ];

  filterGroups(groupname: string) {
    return this.Groups.filter(group => group.groupname.toLowerCase().indexOf(groupname.toLowerCase()) === 0);
  };
  filterGroups1(membername: string) {
    return this.Groups.filter(group => group.member[0].membername.toLowerCase().indexOf(membername.toLowerCase()) === 0);
  };
  title = 'Highcharts + Angular 5 Demo';

  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'brown';
    const options: Highcharts.Options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Mobile brand Consumption'
      },
      xAxis: {
        categories: ['Nokia', 'HTC', 'APPLE']
      },
      yAxis: {
        title: {
          text: 'Brand consumption'
        }
      },
      series: [{
        name: '2016',
        data: [50, 30, 40]
      }, {
        name: '2017',
        data: [50, 70, 30]
        },
        {
          name: '2018',
          data: [80, 70, 70]
        },
      ]
    };

    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  addSeries() {
    this.chart.addSeries({
      name: 'Mobile',
      data: [10, 30, 90]
    })
  }
  //matdialog module #1
  openDialog(): void {
    let dialogRef = this.dialog.open(logoutdialogcomponent, {
      width: '250px',

    });
  }
}
