import { Injectable } from '@angular/core';
import contries from './countries.json';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {
  address = new BehaviorSubject<any>({country: '', city: ''});
  constructor() { }

  getContries(data: string) {
   let location = {country: '', city: ''}
   Object.keys(contries).forEach((c) => {
    data = data.toLowerCase();
    let countryLower = new RegExp("\\b" + c.toLowerCase() + "\\b").test(data);
    if ( countryLower ) {
      location.country = c;
      contries[c].forEach((city) => {
        const cityLower = new RegExp("\\b" + city.toLowerCase() + "\\b").test(data);
        if ( cityLower ) {
          location.city = city;
        }
      })
    } else {
      contries[c].forEach((city) => {
        const cityLower = new RegExp("\\b" + city.toLowerCase() + "\\b").test(data);
        if ( cityLower ) {
          location.city = city;
          location.country = location.country === '' ? c : location.country;
        }
      })
    }
   });
   return location;
  }

  setAddress(ad) {
    this.address.next(ad);
  }

  getAddress() {
    return this.address.asObservable();
  }
}
