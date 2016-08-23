import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees');
  this.route('subcommittees', {path: '/subcommittees/:parent_committee_id'});
  this.route('bills');
  this.route('bill-details', {path: 'bill-details/:bill_id'});
  this.route('upcomingVote');
  this.route('legislator', {path: 'legislator/:legislator_id'});
});

export default Router;
