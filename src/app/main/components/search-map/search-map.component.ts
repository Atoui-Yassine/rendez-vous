import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, MapMarkerClusterer } from '@angular/google-maps';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.scss']
})
export class SearchMapComponent {
  center:google.maps.LatLngLiteral={lat: 47.016574992839494, lng: 2.9913817991325997};
  zoom=3;
  locations = [
    { lat: 34.7400, lng: 10.7600},
    { lat: 36.8008, lng: 10.1800 },
    { lat: 36.8325, lng: 10.1659 },
    { lat: 35.8242, lng: 10.6365 },
    { lat: 36.4544, lng: 10.7374 },
    { lat: 34.7391, lng: 10.7604 },
    { lat: 36.7489, lng: 9.1895 },
    { lat: 36.5097, lng: 8.7804 },
    { lat: 33.8942, lng: 9.5615 },
    { lat: 36.8188, lng: 10.1655 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 }
  ];
  icon = {
    url: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png#custom_marker',
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  }
  mapLoad() {
    this.mapLoaded = true
  }
  mapLoaded: boolean = false;
  markerClustererImagePath =
  'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
 
  public openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow) {
    infoWindow.open(marker);
    setTimeout(()=>{
      infoWindow.close()
    },3000)
  }
 
 
  
}
