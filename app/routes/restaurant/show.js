import Ember from 'ember';

export default Ember.Route.extend({
  zomato: Ember.inject.service('zomato'),
  model(params) {
    return this.get('zomato').fetchRestaurant(params.res_id).then(function(value) {
      window.console.log(value);
      return value;
    });
  }
});
