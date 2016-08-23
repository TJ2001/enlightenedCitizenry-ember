import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id=' + params.legislator_id + '&apikey=5c1b70b657e64475ac41c7f715a202b7';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results[0];
    });
  }
});
