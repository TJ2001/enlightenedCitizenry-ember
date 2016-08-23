import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=5c1b70b657e64475ac41c7f715a202b7&per_page=all';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return Ember.RSVP.hash({
        subcommittees: responseJSON.results,
        parent_id: params.parent_committee_id
      });
    });
   }
});
