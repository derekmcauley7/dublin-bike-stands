import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    openMap: function(){
      this.transitionToRoute('bike');
    }
  }
});
