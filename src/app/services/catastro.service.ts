import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatastroService {

  CATASTRO_SPAIN_BY_COORDINATES = 'https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCoordenadas.asmx/Consulta_RCCOOR';

  constructor(private http: HttpClient) { }

  getRCByCoordinates() {

  }

}
