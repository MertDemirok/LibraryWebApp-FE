import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //this.route('index');
  this.route('contact');
  this.route('library');
  this.route('about');
  this.route('login');
  this.route('dashboard');
  this.route('reserve');
});

export default Router;
