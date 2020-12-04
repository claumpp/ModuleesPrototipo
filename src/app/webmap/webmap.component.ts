import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, OnDestroy} from '@angular/core';
import { loadModules } from 'esri-loader';
import {CatastroService} from "../services/catastro.service";
import {Property} from "../model/property";

@Component({
  selector: 'app-esri-map',
  templateUrl: './webmap.component.html',
  styleUrls: ['./webmap.component.css']
})
export class WebmapComponent implements OnInit, OnDestroy {

  properties: Property[];

  @Output() mapLoadedEvent = new EventEmitter<boolean>();

  @ViewChild('webMapViewNode', { static: true }) private mapViewEl: ElementRef;
  view: any;

  constructor( public catastroService: CatastroService) { }

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

      const map = new Map(mapProperties);

      const mapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: [-0.3601076, 39.4977788],
        zoom: 10,
        map: map
      };

      this.view = new MapView(mapViewProperties);

      const searchWidget = new Search({

        view: this.view
      });
      await this.view.when( () => {
        this.properties = [];

        this.view.ui.add( searchWidget, {
          position: 'top-right',
          index: 0
        } );

        searchWidget.on('select-result', (event) => {
          const newSpatialReference = new SpatialReference({
            wkid: 25830
          });

          const point = event.result.feature.geometry;
          const gsvc = new GeometryService('http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer');
          const params = new ProjectParameters({
            geometries: [point],
            outSpatialReference: newSpatialReference
          });
          let newGeometry;
          gsvc.project(params).then( (outGem) => {
            newGeometry = outGem[0];
            this.catastroService.getRCByCoordinates(newGeometry.x, newGeometry.y).subscribe( (data) => {
              const parser = new DOMParser();
              let dataFile = parser.parseFromString(data, 'text/xml');
              const rc1 = dataFile.getElementsByTagName('pc1')[0].textContent;
              const rc2 = dataFile.getElementsByTagName('pc2')[0].textContent;
              const rcGeneral = rc1.concat(rc2);
               this.catastroService.getBuildingDetailsByRC(rcGeneral).subscribe((prop) => {
                const parser2 = new DOMParser();
                let dataXML = parser2.parseFromString(prop, 'text/xml');
                const properties = dataXML.getElementsByTagName('rcdnp');
                let rcToSearch = rcGeneral;
                for ( let i = 0; i < properties.length ; i++){
                  let detail = properties[i];
                  let property = this.getInfoPropGeneral(detail, rcGeneral);
                  console.log('Las propiedades!!!! ', this.properties);
                  this.properties.push(property);
                }
              });

            });
          });
        });
      });
      return this.view;
    } catch (error) {
      console.error('EsriLoader: ', error);
    }
  }

  ngOnInit() {
    this.initializeMap();
  }

  ngOnDestroy() {
    if (this.view) {
      this.view.container = null;
    }
  }

  getInfoPropGeneral (prop: any, rcGeneral: string) {

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
}
