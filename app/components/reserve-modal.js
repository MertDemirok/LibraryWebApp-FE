import Ember from 'ember';

export default Ember.Component.extend({
  action:{
    bookid(name){
      this.get('book').findRecord(name, 1)
    }
  }
});
