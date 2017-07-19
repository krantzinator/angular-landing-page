import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table-fun',
  templateUrl: './table-fun.component.html',
  styleUrls: ['./table-fun.component.css']
})
export class TableFunComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
