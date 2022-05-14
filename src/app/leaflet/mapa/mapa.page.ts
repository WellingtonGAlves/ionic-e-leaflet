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
  circle: any;
  popup: any;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.initMap();
      // alert('Loading...');
    },1000);
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
      this.addMarker();
      //add circle
      this.addCircle();
      //call function after click on mapa
      this.map.on('click', (e: any) => {
        this.onMapClick(e,this.map);
      });
    }
  }
  addMarker(){
    //add marker
    this.marker = L.marker([51.5, -0.09]).addTo(this.map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.',{closeButton: false})
    .openPopup();
  }
  addCircle(){
    this.circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this.map);
  }
  onMapClick(e,map) {
    // alert("You clicked the map at " + e.latlng);
    const popup = L.popup();
    popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(map);
}
}
