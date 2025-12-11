import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements AfterViewInit{
  @Input() tableData: any[] = [];
  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @Input() displayedColumns: string[] =[];
  @Input() columnHeaders: string[] =[];
  @Output() rowClicked = new EventEmitter <any>;
  clickedData(a:any){
    console.log('clicked data',a)
    this.rowClicked.emit(a);
  }

  ngOnInit(){
    console.log('1');
    this.dataSource = new MatTableDataSource(this.tableData);
    console.log('tabel dataaaaa---',this.dataSource);
  }
   ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnChanges(){
    console.log('data',this.tableData)
    if(this.tableData){
       this.dataSource.data = this.tableData;
    }    
  }
  applyFilters(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


