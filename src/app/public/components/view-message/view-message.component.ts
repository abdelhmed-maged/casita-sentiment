import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GetCountriesService } from '../../services/get-countries.service';
import {Observable} from 'rxjs'
import { Input, ViewChild } from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.scss']
})
export class ViewMessageComponent implements OnInit {
  options: google.maps.MapOptions = {
    zoom: 3
  };
  center: google.maps.LatLngLiteral =  {lat: 20, lng: 5};
  mapReady = true;
  @Input() markers = [];
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

  markerPositions = [];
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  message
  constructor(private getCountries: GetCountriesService, private cdr: ChangeDetectorRef) {
    
   }

  ngOnInit(): void {
    this.markers.forEach((m, i) => {
      this.getLocation(m.location.city).toPromise().then((res) => {
        this.markerPositions = this.markerPositions.concat({lat: res.lat(), lng: res.lng(), message: m.message});
      }, () => {
        // this.markers.splice(i, 1);
        // console.log(this.markers, this.markerPositions);
        this.getLocation(m.location.country).toPromise().then((res) => {
        this.markerPositions = this.markerPositions.concat({lat: res.lat(), lng: res.lng(), message: m.message});
        }, () => {
          this.markerPositions = this.markerPositions.concat({lat: 2, lng: 4, message: m.message});
        })
      }); 
    });
  }

  getLocation(address: string): Observable<any> {
    let geocoder = new google.maps.Geocoder();
    return Observable.create(observer => {
        geocoder.geocode({
            'address': address
        }, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
                observer.next(results[0].geometry.location);
                observer.complete();
            } else {
                observer.error();
            }
        });
    });
  }
  openInfoWindow(marker: MapMarker, message) {
    this.message = message;
    this.infoWindow.open(marker);
  }
}
