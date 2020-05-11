import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Como usar el Componente Google Maps de Angular 9'; 

  // Configuración de Google Maps 
  center = {lat: -12.0262676, lng: -77.1278653};  
  zoom = 4;
  display?: google.maps.LatLngLiteral;

} 
