import { Component, OnInit, Input } from '@angular/core';
import { EmployeesModel } from 'src/app/models/employees.model';


@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {

  columnDefs = [
    {headerName: 'Id', field: 'id', sortable: true, filter: true },
    {headerName: 'Name', field: 'name', sortable: true, filter: true },
    {headerName: 'Contract TypeName', field: 'contractTypeName', sortable: true, filter: true},
    {headerName: 'Hourly Salary', field: 'hourlySalary', sortable: true, filter: true},
    {headerName: 'Monthly Salary', field: 'monthlySalary', sortable: true, filter: true},
    {headerName: 'Annual Salary', field: 'annualSalary', sortable: true, filter: true}
  ];

  @Input() employees: EmployeesModel[] = [];
  iemployees = new EmployeesModel();

  constructor() { }

  ngOnInit() {
  }

}
