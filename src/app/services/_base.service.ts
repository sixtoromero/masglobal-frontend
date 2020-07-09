import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';

///Clase base que se requiere en los demás servicios para el poder hacer uso de las peticiones get
export abstract class BaseService<T> {

    ///Es la respuesta que va a devolver la petición get
    public responseModel: ResponseModel<any>;
    ///Se define la ruta inyectada a los servicios que hereden esta clase
    public _apiRootLocal: string;

    constructor(protected _httpClient: HttpClient,
                protected _apiRoot: string = environment.apiGatewayURL) {
                    this.responseModel = new ResponseModel;
                    this._apiRootLocal = environment.apiGatewayURL;
    }

    ///Método que ejecuta una petición get devolviendo una respuesta de tipo T del modelo ResponseModel
    get(endPoint: string): Observable<ResponseModel<T>> {

        ///URL de la api concatenado con la acción del controlador de la api.
        const apiURL = `${this._apiRoot}${endPoint}`;
        console.log('URL API', apiURL);
        ///Retorna lo especifícado en el método get
        return this._httpClient.get(apiURL)
        .pipe(
            map(
                (resp: ResponseModel<T>) => {
                    this.responseModel.Data = resp;
                    this.responseModel.IsSuccess = true;
                    this.responseModel.Message = '';

                    return this.responseModel;
        }));
    }
}
