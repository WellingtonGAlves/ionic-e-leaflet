import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {

  map: any;
  showMap: boolean;
  marker: any;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

  }

  initMap(){
    if(this.map === undefined){
      this.map = L.map('map').setView([51.505, -0.09], 13);
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // maxZoom: 20,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });

      tiles.addTo(this.map);

      this.marker = L.marker([51.5, -0.09]).addTo(this.map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    }
  }
}
