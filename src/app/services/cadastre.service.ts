import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CadastreService {

  CATASTRO_SPAIN_BY_COORDINATES = 'https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCoordenadas.asmx/Consulta_RCCOOR';
  CATASTRO_SPAIN_BY_RC = 'http://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejero.asmx/Consulta_DNPRC';

  constructor(private http: HttpClient) { }

  getRCByCoordinates(coorX: string, coorY: string) {
    const header = new HttpHeaders({'Accept': 'application/xml'});
    const params = new HttpParams()
      .set('SRS', 'EPSG:25830')
      .set('Coordenada_X', coorX)
      .set('Coordenada_Y', coorY);
    const options = {
      header: header,
      params: params,
      responseType: 'text' as 'text'
    };
      return this.http.request('GET', this.CATASTRO_SPAIN_BY_COORDINATES, options);
  }

  getBuildingDetailsByRC(rc: string) {
    const header = new HttpHeaders({'Accept': 'application/xml'});
    const params = new HttpParams()
      .set('RC', rc)
      .set('Provincia', '')
      .set('Municipio', '');
    const options = {
      header: header,
      params: params,
      responseType: 'text' as 'text'
    };
    return this.http.request('GET', this.CATASTRO_SPAIN_BY_RC, options);
  }

}
