import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal:false,
  session: Ember.inject.service('session'),
    actions: {
      closeModal(){
        this.send('closeModalDialog')
      },
      openModal(){
        this.send('showModalDialog')
        },
      closeModalDialog(){
        this.set('isShowingModal', false)
      },
      showModalDialog(message){
        this.set('modalMessage',message)
        this.set('isShowingModal',true)
      },
      invalidateSession() {
        this.get('session').invalidate();
      }
    }
});
