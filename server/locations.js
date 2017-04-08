
Meteor.methods({
    'loadCountryFile': function(filename) {
        return Assets.getText('public/provinces/' + filename + '.json');
    }
});