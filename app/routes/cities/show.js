import Ember from 'ember';

export default Ember.Route.extend({
  zomato: Ember.inject.service('zomato'),
  model(params) {
    let city_details = params.city_info.split("-");
    return this.get('zomato').fetchCity(city_details).then(function(value) {
      window.console.log(value);
      return value;
    });
  }
});
