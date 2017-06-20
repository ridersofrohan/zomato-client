import Ember from 'ember';

export default Ember.Route.extend({
  zomato: Ember.inject.service('zomato'),
  model() {
    return this.get('zomato').fetchCities("San Francisco".replace(" ", "%20")).then(function(value) {
        window.console.log(value);
        let suggestions = value.location_suggestions;
        for(let i = 0; i < suggestions.length; i++) {
          suggestions[i].id = `${suggestions[i].entity_id}-${suggestions[i].entity_type}`;
        }
        return suggestions;
      }
    );
  }
});
