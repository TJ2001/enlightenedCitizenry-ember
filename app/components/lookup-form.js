import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
    },
    listCommittees() {
      this.sendAction('listCommittees');
    },
    listBills(){
      this.sendAction('listBills');
    },
    upcomingVote(){
      this.sendAction('upcomingVote');
    }
  }
});
