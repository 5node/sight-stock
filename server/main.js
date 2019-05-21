import { Meteor } from 'meteor/meteor';

import '/imports/collections/Time';
import '/imports/publications/Time';
import '/imports/methods/UpdateTime';

Meteor.startup(() => {
    // code to run on server at startup
    // Update the current time
    Meteor.call('UpdateTime');
    // Add a new doc on each start.
    Time.insert({ time: new Date() });
    // Print the current time from the database
    console.log(`The time is now ${Time.findOne().time}`);
});
