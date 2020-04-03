import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Server Maps';
  strR='';
  strC='';
  latCasa: number = 45.539108;
  lngCasa: number = 9.243117;
  lat1:number =45.5064503;
  lgn1:number=9.1911141;
  colorC:String='';
  colorR:String='';

  changeColor(strC)

  {
    this.colorC=strC;
  }
changeRect(strR)
  {
    this.colorR=strR;
  }
    public icon =  {
    url:'./assets/img/cat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  public ebay =  {
    url:'./assets/img/ebay.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  public  apple=  {
    url:'./assets/img/apple.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  public  amazon=  {
    url:'./assets/img/amazon.ico',
    scaledSize: {
      width: 60,
      height: 60
    }

  };
triangle: Array<Point> =
  [

    {lng:9.03, lat:45.6},
    {lng:9.243117, lat:45.539108},
    {lng:9.029865, lat:45.482597}

  ]
rectangle: Array<Point> =
[
{lng:9.243117, lat:45.63},
    {lng:9.55, lat:45.63},
    {lng:9.55, lat:45.46},
    {lng: 9.243117, lat:45.46}
 ]

}



