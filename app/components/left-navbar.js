import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
        pressed: function() {
          this.$("#menu-toggle").click(function(e) {
                  e.preventDefault();
                  $("#wrapper").toggleClass("toggled");
              });
        }
    }
});
