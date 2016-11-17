import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
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
