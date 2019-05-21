import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);

// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

import LandingPage from './components/LandingPage.vue';
import './main.html';


Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...LandingPage,
  });
});

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
