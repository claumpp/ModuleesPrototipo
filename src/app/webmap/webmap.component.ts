import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, OnDestroy} from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-esri-map',
  templateUrl: './webmap.component.html',
  styleUrls: ['./webmap.component.css']
})
export class WebmapComponent implements OnInit, OnDestroy {

  @Output() mapLoadedEvent = new EventEmitter<boolean>();

  @ViewChild('webMapViewNode', { static: true }) private mapViewEl: ElementRef;
  view: any;

  constructor() { }

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
            newGeometry = outGem;
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
}
