import { Component, OnInit } from '@angular/core';
import {CatastroService} from "../services/catastro.service";
import {ActivatedRoute} from "@angular/router";
import {Property} from "../model/property";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  property: Property;
  constructor( public catastroService: CatastroService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const rc = this.route.snapshot.paramMap.get('rc');
    this.catastroService.getBuildingDetailsByRC(rc).subscribe((prop) => {
      const parser2 = new DOMParser();
      let dataXML = parser2.parseFromString(prop, 'text/xml');
      const properties = dataXML.getElementsByTagName('bico')[0];
      this.property = this.convertToProperty(properties, rc);
    })
  }

  convertToProperty (info: any, rc: string) {
    const address = info.getElementsByTagName('ldt')[0].textContent;
    const use = info.getElementsByTagName('luso')[0].textContent;
    const surfaceCons = info.getElementsByTagName('sfc')[0].textContent;
    const year = info.getElementsByTagName('ant')[0].textContent;
    const surfaceGraph = info.getElementsByTagName('sfc')[0].textContent;
    const participation = info.getElementsByTagName('cpt')[0].textContent;
    return new Property(rc, '', '', surfaceCons, '', '', '', year, '', address, use, surfaceGraph, participation);
  }

}
