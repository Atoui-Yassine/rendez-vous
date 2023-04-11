import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custum-marker',
  templateUrl: './custum-marker.component.html',
  styleUrls: ['./custum-marker.component.scss']
})
export class CustumMarkerComponent  implements OnInit{
  @Input() url !:string;
@Input() position ?: google.maps.LatLngLiteral
constructor(){
  this.url = this.geturl()
  console.log("this is url",this.url,"this is position",this.position);}

ngOnInit(): void {
 
  
}
  icon = {
    url:this.geturl(),
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  }
  geturl(){
  
    
    return this.url  || 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png#custom_marker'
  }
}
