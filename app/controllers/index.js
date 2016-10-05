import Ember from 'ember';

export default Ember.Controller.extend({
  address: '',
  radius: '',
  geolocation: false,
  isvalidNumber: Ember.computed.match('radius', /^1-9/),
  isvalidRange: Ember.computed.lte('radius', 500),

  actions: {
    chooseGeolocation() {
      this.set('geolocation', true);
    }
  }
});
