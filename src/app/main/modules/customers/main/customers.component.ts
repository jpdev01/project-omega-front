import { Component, OnInit } from '@angular/core';
import { TableComponent } from 'src/app/main/components/table/table.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  table;

  constructor(table: TableComponent) {
    this.table = table;
  }

  ngOnInit(): void {

    this.table.x = "deu boa!!!";
  }

}
