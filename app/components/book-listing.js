import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal:false,
    actions: {
      openModal(){
        this.send('showModalDialog', 'Test Modal')
        },
      closeModalDialog(){
        this.set('isShowingModal', false)
      },
      showModalDialog(message){
        this.set('modalMessage',message)
        this.set('isShowingModal',true)
      }
    }
});
