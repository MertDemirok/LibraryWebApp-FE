import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByBook(param) {
      if (param !== '') {
        return this.get('store').query('book', { title: param });
      } else {
        return this.get('store').findAll('book');
      }
    }
  }
});
