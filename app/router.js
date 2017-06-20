import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cities', function() {
    this.route('show', { path: '/:city_info'});
  });
  this.route('restaurant', function() {
    this.route('show', { path: '/:res_id'});
  });
});

export default Router;
