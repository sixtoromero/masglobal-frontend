import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { BaseService } from '../_base.service';
import { APIENDPOINT } from 'src/app/config/configuration';
import { EmployeesModel } from 'src/app/models/employees.model';

@Injectable({
    providedIn: 'root'
  })
  export class EmployeesService extends BaseService<EmployeesModel> {
    constructor(protected http: HttpClient) {
          super(http, environment.apiGatewayURL);
    }

    getEmployees(id: number, typecontract: string) {
      return new Promise( resolve => {
        this.get(APIENDPOINT.getEmployees + id + '/' + typecontract)
          .subscribe(resp => {
            if (resp.IsSuccess) {
              resolve(resp.Data);
            } else {
              resolve(null);
              console.log('Mostrar alerta de error');
            }
          }, error => {
            resolve(null);
            console.log('Mostrar alerta de error');
            return null;
          });
      });
    }
}



