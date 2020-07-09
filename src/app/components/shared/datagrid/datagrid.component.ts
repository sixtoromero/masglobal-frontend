import { Component, OnInit, Input } from '@angular/core';
import { EmployeesModel } from 'src/app/models/employees.model';


@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {

  
  @Input() employees: EmployeesModel[] = [];
  iemployees = new EmployeesModel();

  constructor() { }

  ngOnInit() {
  }

}
