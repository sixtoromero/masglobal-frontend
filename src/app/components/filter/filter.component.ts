import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { EmployeesService } from '../../services/employees/employees.service';
import { EmployeesModel } from '../../models/employees.model';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  employees: EmployeesModel[] = [];

  constructor(private ngxService: NgxUiLoaderService,
              private employeesService: EmployeesService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.ngxService.start();
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];
      const typecontract = params['typecontract'];
      if (id !== null && id !== '') {
        this.getEmployees(+id, typecontract);
      } else {
        this.getEmployees(0, typecontract);
      }
    });
    this.ngxService.stop();
  }

  async getEmployees(id: number, typecontract: string) {
    const resp = await this.employeesService.getEmployees(id, typecontract) as EmployeesModel[];
    if (resp != null) {
      this.employees = resp['Data'];
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An issue has occurred, please try again!'
      });
    }

  }

}
