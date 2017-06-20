import Ember from 'ember';

const google = window.google;

export default Ember.Object.extend({

  init() {
    this.set('geocoder', new google.maps.Geocoder());
  },

  createMap(element, location) {
    let map = new google.maps.Map(element, { scrollwheel: false, zoom: 10 });
    this.pinLocation(location, map);
    return map;
  },

  pinLocation(location, map) {
    let position = { lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) };
    map.setCenter(position);
    new google.maps.Marker({ position, map, title: location.title });
  }

});
