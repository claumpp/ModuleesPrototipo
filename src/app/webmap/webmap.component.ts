import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, OnDestroy} from '@angular/core';
import { loadModules } from 'esri-loader';
import {CadastreService} from "../services/cadastre.service";
import {Property} from "../model/property";

@Component({
  selector: 'app-esri-map',
  templateUrl: './webmap.component.html',
  styleUrls: ['./webmap.component.css']
})
export class WebmapComponent implements OnInit, OnDestroy {

  properties: Property[];
  error: string;
  propSelected: Property;
  propIsSelected: boolean;

  @Output() mapLoadedEvent = new EventEmitter<boolean>();

  @ViewChild('webMapViewNode', { static: true }) private mapViewEl: ElementRef;
  view: any;

  constructor( public catastroService: CadastreService) {
  }

  async initializeMap() {
    try {
      const [
        Map,
        FeatureLayer,
        MapView,
        LayerList ,
        Search,
        Locator,
        SpatialReference,
        projection,
        Geometry,
        GeometryService,
        ProjectParameters
      ] = await loadModules([
        'esri/Map',
        'esri/layers/FeatureLayer',
        'esri/views/MapView',
        'esri/widgets/LayerList',
        'esri/widgets/Search',
        'esri/tasks/Locator',
        'esri/geometry/SpatialReference',
        'esri/geometry/projection',
        'esri/geometry/Geometry',
        'esri/tasks/GeometryService',
        'esri/tasks/support/ProjectParameters']);


      const mapProperties = {
        basemap: 'topo-vector'
      };

      const newSpatialReference = new SpatialReference({
        wkid: 25830
      });
      const gsvc = new GeometryService('http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer');

      //map properties
      const map = new Map(mapProperties);
      const mapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: [-0.3601076, 39.4977788],
        zoom: 13,
        map: map
      };
      this.view = new MapView(mapViewProperties);

      const searchWidget = new Search({
        view: this.view
      });
      await this.view.when( () => {

        // case navigation into map
        this.view.on('click', (evt) => {
          this.properties = [];
          searchWidget.clear();
          this.view.popup.clear();
          if (searchWidget.activeSource) {
            const geocoder = searchWidget.activeSource.locator;
            const params = {
              location: evt.mapPoint
            };
            geocoder.locationToAddress(params)
              .then((response) => {
                const address = response.address;
                const point = evt.mapPoint;
                this.showPopup(address, point, this.view );

                const params = new ProjectParameters({
                  geometries: [point],
                  outSpatialReference: newSpatialReference
                });

                let newGeometry;
                gsvc.project(params).then( (outGem) => {
                  newGeometry = outGem[0];
                  this.getInfoFromCadastre(newGeometry.x, newGeometry.y);
                });

              }, (err) =>  {
                this.showPopup("No address found.", evt.mapPoint, this.view);
              });
          }
        });

        this.properties = [];
        this.view.ui.add( searchWidget, {
          position: 'top-right',
          index: 0
        } );

        // case search in widget
        searchWidget.on('select-result', (event) => {
          this.properties = [];
          const point = event.result.feature.geometry;
          const params = new ProjectParameters({
            geometries: [point],
            outSpatialReference: newSpatialReference
          });
          let newGeometry;
          gsvc.project(params).then( (outGem) => {
            newGeometry = outGem[0];
            this.getInfoFromCadastre(newGeometry.x, newGeometry.y);
          });
        });
      });
      return this.view;
    } catch (error) {
      console.error('EsriLoader: ', error);
    }
  }

  ngOnInit() {
    this.propSelected = new Property('','','','','','','','','','','','','');
    this.properties = [];
    this.propIsSelected = false;
    this.initializeMap();
  }

  ngOnDestroy() {
    if (this.view) {
      this.view.container = null;
    }
  }

  getInfoFromCadastre( x: any, y: any ) {
    this.catastroService.getRCByCoordinates(x, y).subscribe( (data) => {
      const parser = new DOMParser();
      let dataFile = parser.parseFromString(data, 'text/xml');
      const err = dataFile.getElementsByTagName('err')[0];
      if (err !== undefined) {
        this.error = err.getElementsByTagName('des')[0].textContent;
      } else {
        const rc1 = dataFile.getElementsByTagName('pc1')[0].textContent;
        const rc2 = dataFile.getElementsByTagName('pc2')[0].textContent;
        const rcGeneral = rc1.concat(rc2);
        this.catastroService.getBuildingDetailsByRC(rcGeneral).subscribe((prop) => {
          const parser2 = new DOMParser();
          let dataXML = parser2.parseFromString(prop, 'text/xml');

          // case: when request is only one property
          const propertyOnly = dataXML.getElementsByTagName('bico')[0];
          if ( propertyOnly !== undefined ){
            let property = this.getInfoPropGeneral(propertyOnly);
            this.properties.push(property);
          } else {
            // case: when request are many properties
            const properties = dataXML.getElementsByTagName('rcdnp');
            for ( let i = 0; i < properties.length ; i++){
              let detail = properties[i];
              let property = this.getInfoPropGeneral(detail);
              this.properties.push(property);
            }
          }
        });
      }
    });
  }

  getInfoPropGeneral (prop: any) {

    const rc1 = prop.getElementsByTagName('pc1')[0].textContent;
    const rc2 = prop.getElementsByTagName('pc2')[0].textContent;
    const rc3 = prop.getElementsByTagName('car')[0].textContent;
    const rc4 = prop.getElementsByTagName('cc1')[0].textContent;
    const rc5 = prop.getElementsByTagName('cc2')[0].textContent;
    let rc = '';
    rc = rc.concat( rc1,rc2, rc3, rc4, rc5);
    const tagAddr = prop.getElementsByTagName('dir')[0];
    const tagLocInt = prop.getElementsByTagName('loint')[0];
    const viaType = tagAddr.getElementsByTagName('tv')[0].textContent;
    const viaName = tagAddr.getElementsByTagName('nv')[0].textContent;
    const addNumber = tagAddr.getElementsByTagName('pnp')[0].textContent;
    const block = tagLocInt.getElementsByTagName('bq').length > 0 ? 'Bloque: ' + tagLocInt.getElementsByTagName('bq')[0].textContent : '';
    const stair = tagLocInt.getElementsByTagName('es').length > 0 ? 'Es: ' + tagLocInt.getElementsByTagName('es')[0].textContent : '';
    const plant = tagLocInt.getElementsByTagName('pt').length > 0 ? 'Pl: ' + tagLocInt.getElementsByTagName('pt')[0].textContent : '';
    const door = tagLocInt.getElementsByTagName('pu').length > 0 ? 'Pt: ' + tagLocInt.getElementsByTagName('pu')[0].textContent : '';
    let address = '';
    address = address.concat( viaType, ' ' ,  viaName, ' ', addNumber);
    const postalCode = prop.getElementsByTagName('dp')[0].textContent;
    const prov = prop.getElementsByTagName('np')[0].textContent;
    const town = prop.getElementsByTagName('nm')[0].textContent;
    let logInt = '';
    logInt = logInt.concat(block, ' ' , stair, ' ' ,plant , ' ' ,door);
    return new Property(rc, address, logInt,'', postalCode, prov, town, '', '', '', '', '','');
  }



  showPopup(address, pt, view) {
    view.popup.open({
      title:  + Math.round(pt.longitude * 100000)/100000 + ", " + Math.round(pt.latitude * 100000)/100000,
      content: address,
      location: pt
    });
  }

  getDetailFromRC(prop: Property){
    const rc = prop.rc;
    this.propIsSelected = true;
    this.catastroService.getBuildingDetailsByRC(rc).subscribe((prop) => {
      const parser2 = new DOMParser();
      let dataXML = parser2.parseFromString(prop, 'text/xml');
      const properties = dataXML.getElementsByTagName('bico')[0];
      this.propSelected  = this.convertToProperty(properties, rc);
    })
  }

  convertToProperty (info: any, rc: string) {
    const address = info.getElementsByTagName('ldt')[0].textContent;
    const use = info.getElementsByTagName('luso')[0].textContent;
    const surfaceCons = info.getElementsByTagName('sfc')[0].textContent;
    const year = info.getElementsByTagName('ant')[0].textContent;
    const surfaceGraph = info.getElementsByTagName('sfc')[0].textContent;
    const participation = info.getElementsByTagName('cpt').length > 0 ? info.getElementsByTagName('cpt')[0].textContent: '';
    return new Property(rc, '', '', surfaceCons, '', '', '', year, '', address, use, surfaceGraph, participation);
  }
}
