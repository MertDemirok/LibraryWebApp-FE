import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    filterByBook(param) {
      if (param !== '') {
        console.log(param);
        return this.get('store').query('book', { title: param });
      } else {
          console.log("buradayım");
        return this.get('store').findAll('book');
      }
    }
  }
});
