import Ember from 'ember';

export default Ember.Component.extend({
  bearShitsInWoods: function() {
    return 1 + 1 === 2;
  }.property()
});
