import Ember from 'ember';

export default Ember.Component.extend({
  action:{
  model() {
    return this.get('store').findAll('book');
  }
});
