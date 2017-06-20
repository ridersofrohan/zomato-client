import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  fetchCities(city) {
    let url = `https://developers.zomato.com/api/v2.1/locations?query=${city}&count=10`;
    return this.get('ajax').request(url, {
      "type": 'GET',
      "dataType": 'JSON',
      beforeSend: function(request) {
        request.setRequestHeader("user-key", "f3052a01466a714dad66f2287b6c2c43");
      },
      error: function (jqXHR) {
        window.console.log(jqXHR);
      }
    });
  },

  fetchCity(city_details) {
    let url = `https://developers.zomato.com/api/v2.1/location_details?entity_id=${city_details[0]}&entity_type=${city_details[1]}`;
    return this.get('ajax').request(url, {
      "type": 'GET',
      "dataType": 'JSON',
      beforeSend: function(request) {
        request.setRequestHeader("user-key", "f3052a01466a714dad66f2287b6c2c43");
      },
      success: function (data) {
          return data;
      },
      error: function (jqXHR) {
          window.console.log(jqXHR);
      }
    });
  },

  fetchRestaurant(res_id) {
    let url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${res_id}`;
    return this.get('ajax').request(url, {
      "type": 'GET',
      "dataType": 'JSON',
      beforeSend: function(request) {
        request.setRequestHeader("user-key", "f3052a01466a714dad66f2287b6c2c43");
      },
      success: function (data) {
          return data;
      },
      error: function (jqXHR) {
          window.console.log(jqXHR);
      }
    });
  }
});
