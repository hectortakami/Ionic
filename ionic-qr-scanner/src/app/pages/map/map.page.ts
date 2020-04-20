import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss']
})
export class MapPage implements OnInit {
  latitude: number;
  longitude: number;
  constructor(private route: ActivatedRoute) {
    this.latitude = Number(this.route.snapshot.paramMap.get('lat'));
    this.longitude = Number(this.route.snapshot.paramMap.get('lng'));
  }

  ngOnInit() {
    this.setup3Dmap('mymap');
  }

  setup3Dmap(container: string) {
    // INITIALIZE MAP SETTINGS
    mapboxgl.accessToken =
      'pk.eyJ1IjoiaGVjdGFrIiwiYSI6ImNrOTZjOWlhbjB1azUzZHB1YWQxMno5OG0ifQ.3iBKM0Lfg8kPgdMZknluAw';
    var map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      // IMPORTANT! center:[LONGITUDE, LATITUDE]
      center: [this.longitude, this.latitude],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: container,
      antialias: true
    });

    // CREATE 3D BUILDING REFERENCES
    map.on('load', function() {
      map.resize();

      var layers = map.getStyle().layers;
      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer(
        {
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });

    // CREATE MAP MARKER
    var marker = new mapboxgl.Marker({
      draggable: false
    })
      .setLngLat([this.longitude, this.latitude])
      .addTo(map);
  }
}
