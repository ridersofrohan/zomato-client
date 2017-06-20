import DS from 'ember-data';

export default DS.Model.extend({
  entity_type: DS.attr(),
  entity_id: DS.attr(),
  title: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  city_id: DS.attr(),
  city_name: DS.attr(),
  country_id: DS.attr(),
  country_name: DS.attr()
});
