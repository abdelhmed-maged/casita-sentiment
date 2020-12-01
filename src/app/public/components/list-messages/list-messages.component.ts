import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { GetCountriesService } from '../../services/get-countries.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss']
})
export class ListMessagesComponent implements OnInit, AfterViewInit {
  @Input() messages: any;
  address;
  displayedColumns: string[] = ['messageid', 'message', 'sentiment', 'country', 'city'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private getCountries: GetCountriesService) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.messages);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  viewAddress(loc) {
    this.getCountries.setAddress(loc);
  }
}
