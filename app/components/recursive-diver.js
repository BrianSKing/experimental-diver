import Ember from 'ember';

export default Ember.Component.extend({

  maxDepth: null,
  currentLevel: 0,

  nextLevel: function() {
    return this.get('currentLevel') + 1;
  }.property('currentLevel'),

  shouldRecur: function() {
    console.log(this.get('currentLevel') + ' : ' + this.get('maxDepth'));
    if (this.get('currentLevel') >= this.get('maxDepth')) {
      return false;
    }
    return true;
  }.property('maxDepth', 'currentLevel')
});
