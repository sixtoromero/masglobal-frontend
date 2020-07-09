import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { EmployeesService } from '../../services/employees/employees.service';
import { EmployeesModel } from '../../models/employees.model';
//import { runInThisContext } from 'vm';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees: EmployeesModel[] = [];

  constructor(private ngxService: NgxUiLoaderService,
              private employeesService: EmployeesService) { }


  async ngOnInit() {
    this.ngxService.start();
    const resp = await this.employeesService.getEmployees(0, 'All') as EmployeesModel[];
    if (resp != null) {
      this.employees = resp['Data'];
    } else {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An issue has occurred, please try again!'
        });
    }
    this.ngxService.stop();
  }

}
